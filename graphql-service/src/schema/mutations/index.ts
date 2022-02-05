import { GraphQLObjectType } from 'graphql';
import signin from './auth/signin';
import signout from './auth/signout';
import signup from './auth/signup';

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signin,
    signout,
    signup,
  }
});
