import type { NextPage } from 'next';
import * as R from 'ramda';
import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { PrimaryButton, TextField } from '@fluentui/react';

const mutation = gql`
  mutation Signup($email: String, $password: String) {
    signup(email: $email, password: $password) {
      id
      email
    }
  }
`;

type FormValuesType = {
  email: string;
  password: string;
};

const Signup: NextPage = () => {
  const [signup] = useMutation(mutation);
  const [formValues, setFormValues] = useState<FormValuesType>({
    email: '',
    password: '',
  });

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      const { email, password } = formValues;
      signup({
        variables: {
          email,
          password,
        }
      });
    }}>
      <TextField
        label="Email"
        onChange={(e, newValue) => setFormValues(R.assoc('email', newValue || '', formValues))}
      />
      <TextField
        label="Password"
        type="password"
        onChange={(e, newValue) => setFormValues(R.assoc('password', newValue || '', formValues))}
      />
      <PrimaryButton text="Signup" type="submit" />
    </form>
  );
};

export default Signup;