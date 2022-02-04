import axios from 'axios';
import type { NextPage } from 'next';
import { useEffect } from 'react';

const Signup: NextPage = () => {
  useEffect(() => {
    axios.get('/api/users/current-user').then((res) => {
      console.log('res.data', res.data);
    });
  }, []);
  return (<div>Signup Page</div>);
};

export default Signup;