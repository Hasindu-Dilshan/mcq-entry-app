const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const connectDatabase = require('../../config/database');

dotenv.config({ path: 'config/config.env' });

const SubjectYears = require('../modal/subjectYears');
const SyllabusTopics = require('../modal/syllabusTopics');
const User = require('../modal/user');

const subject_years = require('../data/subject_years.json');
const syllabus_topics = require('../data/syllabus_topics.json');
const users = require('../data/users.json');

const seedSubjectYears = async () => {
  await SubjectYears.findOne()
    .then(async (subjectYears) => {
      subjectYears.subjectYears = subject_years;

      await subjectYears
        .save()
        .then(() => console.log('SubjectYears seeding success'))
        .catch((e) => console.log(e));
    })
    .catch((e) => console.log(e));
};

const seedSyllabusTopics = async () => {
  await SyllabusTopics.insertMany(syllabus_topics)
    .then(() => {
      console.log('SyllabusTopics seeding success');
    })
    .catch((e) => console.log(e));
};

const seedUsers = async () => {
  // remoev _id attribute
  var insertableUsers = users.map(({ _id, ...rest }) => rest);

  // hash plaintext passwords
  insertableUsers = await Promise.all(
    insertableUsers.map(async (user) => {
      const hashedPassword = await bcrypt.hash(
        user.password,
        parseInt(process.env.SALT_ROUNDS, 10)
      );
      return { ...user, password: hashedPassword };
    })
  );

  await User.insertMany(insertableUsers)
    .then(() => {
      console.log('Users seeding success');
    })
    .catch((e) => console.log(e));
};

(async () => {
  await connectDatabase();

  await seedSubjectYears();
  await seedSyllabusTopics();
  await seedUsers();

  process.exit(0); // Exit after all seeding operations are completed
})();
