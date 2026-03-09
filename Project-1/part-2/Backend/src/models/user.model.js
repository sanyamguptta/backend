// requiring mongoose for creating user schema and model
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "Username already exits"],
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    unique: [true, "Username already exits"],
    required: [true, "Username is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  bio: String,
  profileImage: {
    type: String,
    default: "https://ik.imagekit.io/samguptta/default-img.webp",
  },
});

// creating userModel
const userModel = new mongoose.model("users", userSchema);

module.exports = userModel;
