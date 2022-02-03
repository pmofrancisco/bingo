import { GraphQLObjectType } from 'graphql';
import user from './user-query';

export default new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    user,
  }
});
