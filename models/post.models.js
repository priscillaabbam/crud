const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  Content: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
});

module.exports = model("Post", postSchema);
