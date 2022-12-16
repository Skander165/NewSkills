import mongoose from "mongoose";
import validator from "validator";
import Article from "./Article";

// const options = {
//     discriminatorKey: 'role',
//     timestamps: true,
//   };

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Please enter your full name"],
  },
  username: {
    type: String,
    required: [true, "Please enter your username"],
    unique: true,
  },
  age: {
    type: String,
  },
  sexe: {
    type: String,
    enum: ["Male", "Female"],
  },
  interests: {
    type: Array,
    default: [],
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    validate: [validator.isEmail, "Please enter valid email address"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    // maxleng: 10,
    minlength: 6,
  },
  isVerified: { type: Boolean, default: false },
  articles: [{ type: mongoose.Schema.Types.ObjectId, ref: "Article" }],
});

export default mongoose.models.User || mongoose.model("User", UserSchema);

// module.exports = {User};
