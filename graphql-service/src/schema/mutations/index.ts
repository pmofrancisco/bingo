import { GraphQLObjectType } from 'graphql';
import signup from './signup-mutation';

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup,
  }
});
