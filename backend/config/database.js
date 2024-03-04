const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URI)
    .then((con) => {
      console.log(`MongoDB connected with HOST: ${con.connection.host}`);
    })
    .catch((e) => console.log(e));
};

module.exports = connectDatabase;
