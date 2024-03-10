const SubjectYears = require("../src/modal/subjectYears");
const SyllabusTopics = require("../src/modal/syllabusTopics");

const initSubjectYearsCollection = async () => {
  await SubjectYears.deleteMany();

  await SubjectYears.create({
    title: "විෂය නිර්දේෂය",
  })
    .then(() => {
      console.log("Initializing subjectYears collection success");
    })
    .catch((e) => {
      console.log(e);
    });
};

module.exports = initSubjectYearsCollection;
