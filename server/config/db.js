const mongoose = require("mongoose");

const connnectDB = async () => {
  const connect = await mongoose.connect(process.env.MONGO_URL);
  console.log(`Connect to mongoose DB`);
};

module.exports = { connnectDB };
