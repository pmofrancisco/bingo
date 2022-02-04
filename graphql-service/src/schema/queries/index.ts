import { GraphQLObjectType } from 'graphql';
import currentUser from './current-user-query';
import user from './user-query';

export default new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    currentUser,
    user,
  }
});
