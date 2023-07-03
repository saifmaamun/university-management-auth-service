import { Schema, model } from 'mongoose';
// import { IUser, IUserMethods, UserModel } from './user.interface'; // for instance method
import { IUser, UserModel } from './user.interface'; // for static method
import bcrypt from 'bcrypt';
import config from '../../../config';

// const userSchema = new Schema<IUser, Record<string, never>, IUserMethods>(  // for instance method
const UserSchema = new Schema<IUser, UserModel>( // for static method
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
      select: 0,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    student: {
      type: Schema.Types.ObjectId,
      ref: 'Student',
    },
    faculty: {
      type: Schema.Types.ObjectId,
      ref: 'Faculty',
    },
    admin: {
      type: Schema.Types.ObjectId,
      ref: 'Admin',
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);
// /*
// ********************************
// static method for isUserExist
UserSchema.statics.isUserExist = async function (
  id: string
): Promise<Pick<IUser, 'id' | 'password' | 'needsPasswordChange'> | null> {
  return await User.findOne(
    { id },
    { id: 1, password: 1, needsPasswordChange: 1 }
  );
};

// static method for isPasswordMatched
UserSchema.statics.isPasswordMatched = async function (
  givenPassword: string,
  savedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(givenPassword, savedPassword);
};
// */

/*
// ********************************
// instance method for isUserExists
UserSchema.methods.isUserExist = async function (
  id: string
  ): Promise<Partial<IUser> | null> {
    return await User.findOne(
      { id },
      { id: 1, password: 1, needsPasswordChange: 1 }
      );
    };
    
    // instance method for isPasswordMatch
    UserSchema.methods.isPasswordMatched = async function (
      givenPassword: string,
      savedPassword: string
      ): Promise<boolean> {
        return await bcrypt.compare(givenPassword, savedPassword);
      };

// ********************************
*/
UserSchema.pre('save', async function (next) {
  // hashing user password
  // # password required
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds)
  );
  next();
});

export const User = model<IUser, UserModel>('User', UserSchema);
