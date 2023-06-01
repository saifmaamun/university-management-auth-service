import { Model, Schema, model } from 'mongoose'
import { IUser } from './users.interface'

// for static methods
type UserModel = Model<IUser, object>
// creating schema
const userSchema = new Schema<IUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

// model
export const User = model<IUser, UserModel>('User', userSchema)
