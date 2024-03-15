const mongoose = require("mongoose");
const SubjectYears = require("../src/modal/subjectYears");

const initSubjectYearsCollection = async () => {
  if (await SubjectYears.findOne()) {
    return;
  }

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

const connectDatabase = async () => {
  await mongoose
    .connect(process.env.DB_LOCAL_URI)
    .then(async (con) => {
      console.log(`MongoDB connected with HOST: ${con.connection.host}`);
      await initSubjectYearsCollection();
    })
};

module.exports = connectDatabase;
