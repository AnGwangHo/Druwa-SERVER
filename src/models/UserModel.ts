import { Schema, Document, model } from "mongoose";

export interface User extends Document {
  // id: number;
  token: string;
  username: string;
  createdAt: Date;
}

export const UserSchema = new Schema({
  // id: {
  //   type: Number,
  //   required: true,
  //   unique: true,
  // },
  token: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export const UserModel = model<User>("User", UserSchema);
