import httpStatus from 'http-status';
import { User } from '../user/user.model';
import { ILoginUser } from './auth.interface';
import ApiError from '../../../errors/ApiError';

const loginUser = async (payload: ILoginUser) => {
  const { id, password } = payload;

  /*
  // ********************************
  // for instance method
  // creating user instance 
  const user = new User();
  // check user existence
  const isUserExist = await user.isUserExist(id);
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exists');
  }

  if (
    isUserExist.password &&
    !user.isPasswordMatched(password, isUserExist?.password)
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password in incorrect');
  }

  //   create jwt token

  return {
    isUserExist?.needsPasswordChange
  };
  // ********************************
*/

  // /*
  // ********************************
  // for static method
  // const isUserExist = await User.isUserExist(id);

  // if (!isUserExist) {
  //   throw new ApiError(httpStatus.NOT_FOUND, 'User does not exists');
  // }

  // if (
  //   isUserExist.password &&
  //   !(await User.isPasswordMatched(password, isUserExist.password))
  // ) {
  //   throw new ApiError(httpStatus.UNAUTHORIZED, 'Password in incorrect');
  // }

  // //   create jwt token

  // return {
  //   isUserExist,
  //   isPasswordMatched,
  // };
};
// ********************************
// */
export const AuthService = {
  loginUser,
};
