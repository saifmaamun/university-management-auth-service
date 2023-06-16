import { NextFunction, Request, RequestHandler, Response } from 'express';
import { UserService } from './user.service';
// import { z } from 'zod';

const createUser: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { user } = req.body;
    // console.log(user, '12');
    const result = await UserService.createUser(user);
    // console.log(result, '14');
    res.status(200).json({
      success: true,
      message: 'User created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
    // res.status(400).json({
    // error: err,
    // success: false,
    // message: 'Failed to create user',
    // })
  }
};

export const UserController = {
  createUser,
};
