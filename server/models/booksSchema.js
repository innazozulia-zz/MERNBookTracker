const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    //reps
    description: {
      type: String,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timeseries: true }
);

module.exports = mongoose.model("Book", bookSchema);
