const mongoose = require("mongoose");
const initSubjectYearsCollection = require("./dbinit");

const connectDatabase = async () => {
  await mongoose
    .connect(process.env.DB_LOCAL_URI)
    .then(async (con) => {
      console.log(`MongoDB connected with HOST: ${con.connection.host}`);
      await initSubjectYearsCollection();
    })
    .catch((e) => console.log(e));
};

module.exports = connectDatabase;
