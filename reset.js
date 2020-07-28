const mongoose = require("mongoose");
const User = require("./models/user");
const Shoe = require("./models/shoe");
(async function () {
  await mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/shoes_db",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  );
  try {
    await User.collection.drop();
    await Shoe.collection.drop();
    console.log("reset");
  } catch {
    console.log("one or more of the collections were already empty");
    console.log("reset");
  }
  try {
    await User.create({ email: "ts22082@gmail.com", password: "password" });
    await User.create({ email: "admin@gmail.com", password: "password" });
    console.log("new users created");
  } catch (err) {
    console.log(err);
  }
  process.exit();
})();