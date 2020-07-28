const mongoose = require("mongoose");
const Shoe = require("./shoe");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  email: {
    type: String,
    trim: true,
    unique: true,
    match: [/.+@.+\..+/, "Enter a valid email"],
    required: "Must pass an email",
  },
  password: {
    type: String,
    trim: true,
    required: "Must pass password",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

userSchema.post("remove", async (user) => {
  try {
    await Shoe.deleteMany({auotherId: user._id})

    const matchingEntries = await Shoe.find({
      likes: {likerId: user._id},
    })

  matchingEntries.forEach(async (entry) => {
  const indexToDelete = entry.likes.indexOf(user._id)

  entry.likes.splice(indexToDelete, 1);
  await entry.save();
});

  } catch (err) {res.send(err);
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;