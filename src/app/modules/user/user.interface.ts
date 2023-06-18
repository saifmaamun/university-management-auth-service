import { Model, Types } from 'mongoose';
import { IStudent } from '../student/student.interface';

// interface
export type IUser = {
  id: string;
  role: string;
  password: string;
  student?: Types.ObjectId | IStudent;
  // faculty?: Types.ObjectId | IFaculty;
  // admin?: Types.ObjectId | IAdmin;
};

// for static methods
export type UserModel = Model<IUser, Record<string, unknown>>;
