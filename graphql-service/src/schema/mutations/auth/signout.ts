import { Request } from 'express';
import { UserType } from '../../types/user-type';

export default {
  type: UserType,
  resolve: (parentValue: {}, args: any, req: Request) => {
    const { currentUser } = req;
    req.session = null;
    return currentUser;
  },
};