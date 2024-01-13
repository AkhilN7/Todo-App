const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:12345@cluster0.xyscmqm.mongodb.net/");

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
