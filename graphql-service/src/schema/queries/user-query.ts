import { GraphQLID } from 'graphql';
import { UserType } from '../types/user-type';

export default {
  type: UserType,
  args: {
    id: { type: GraphQLID }
  },
  resolve: (parentValue: any, args: { id: String }) => {
  const { id } = args;
  return { id, email: 'pmofrancisco@yahoo.com' };
  }
};
