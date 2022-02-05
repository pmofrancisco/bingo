import { GraphQLObjectType } from 'graphql';
import currentUser from './current-user';

export default new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    currentUser
  }
});
