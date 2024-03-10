const dotenv = require("dotenv");
const connectDatabase = require("../../config/database");

dotenv.config({ path: "config/config.env" });

const SubjectYears = require("../modal/subjectYears");
const SyllabusTopics = require("../modal/syllabusTopics");

const subject_years = require("../data/subject_years.json");
const syllabus_topics = require("../data/syllabus_topics.json");

const seedSubjectYears = async () => {
  await SubjectYears.findOne()
    .then(async (subjectYears) => {
      subjectYears.subjectYears = subject_years;

      await subjectYears
        .save()
        .then(() => console.log("SubjectYears seeding success"))
        .catch((e) => console.log(e));
    })
    .catch((e) => console.log(e));
};

const seedSyllabusTopics = async () => {
  await SyllabusTopics.insertMany(syllabus_topics)
    .then(() => {
      console.log("SyllabusTopics seeding success");
    })
    .catch((e) => console.log(e));
};

(async () => {
  await connectDatabase();

  await seedSubjectYears();
  await seedSyllabusTopics();

  process.exit(0); // Exit after all seeding operations are completed
})();
