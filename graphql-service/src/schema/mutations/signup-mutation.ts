import { Request } from 'express';
import { GraphQLObjectType, GraphQLString } from 'graphql';
import { UserType } from '../types/user-type';

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
  resolve: (parentValue: any, args: ArgsType, req: Request) => {
    const { email } = args;
    return { id: '1', email };
  }
};
