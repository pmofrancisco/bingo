import axios from 'axios';
import { UserType } from '../types/user-type';

export default {
  type: UserType,
  resolve: async () => {
    //const response = await axios.get('http://localhost:3000/api/users/current-user');
    const response = await axios.get('/api/users/current-user');
    const { id, email } = response.data;
    return { id, email };
  }
};
