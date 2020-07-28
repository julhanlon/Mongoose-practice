const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subSchema = new Schema(
  {
    likerId: { type: Schema.ObjectId},
  }, {_id: false}
);

const shoeSchema = new Schema({
  brand: {
    type: String,
    trim: true,
    required: "Must enter a shoe brand",
  },

  price: {
    type: String,
    trim: true,
    required: "Must enter a price",
  },

  colorWay: [String],

  likes: [String],

  authorId: {
    type: Schema.ObjectId,
    required: "Must pass userId",
    ref: "User",
  }
});

const Shoe = mongoose.model("Shoe", shoeSchema);

module.exports = Shoe;
