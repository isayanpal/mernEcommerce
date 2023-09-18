import mongoose from "mongoose";
const Schema = mongoose.Schema;
import { isEmail } from "validator";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a valid password"],
    minlength: [6, "Minimum password length is 6"],
  },
  register_date: {
    type: Date,
    default: Date.now,
  },
});

export default User = mongoose.model("user", UserSchema);
