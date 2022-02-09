import { Request } from 'express';
import { GraphQLString } from 'graphql';
import jwt from 'jsonwebtoken';

import buildClient from '../../../api/build-client';
import { UserType } from '../../types/user-type';

type ArgsType = {
  email: String;
  password: String;
};

export default {
  type: UserType,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString }
  },
  resolve: async (parentValue: {}, args: ArgsType, req: Request) => {
    try {
      const client = buildClient();
      const { data } = await client.post(
        `/api/users/signin`,
        {
          email: args.email,
          password: args.password
        }
      );

      // Generate JWT
      const userJwt = jwt.sign(
        {
          id: data.id,
          email: data.email,
        },
        process.env.JWT_KEY!,
      );

      // Store it on session object
      req.session = {
        jwt: userJwt,
      };

      return data;
    } catch (err: any) {
      throw new Error(err.response.data.errors[0].message);
    }   
  }
};
