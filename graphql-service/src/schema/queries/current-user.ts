import { Request } from 'express';
import { UserType } from '../types/user-type';

export default {
  type: UserType,
  resolve: async (parentValue: {}, args: {}, req: Request) => {
    return req.currentUser;
  }
};
