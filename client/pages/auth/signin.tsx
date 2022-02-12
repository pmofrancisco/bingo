import type { NextPage } from 'next';
import * as R from 'ramda';
import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import {
  MessageBar, MessageBarType, PrimaryButton, TextField,
} from '@fluentui/react';

const mutation = gql`
  mutation Signin($email: String, $password: String) {
    signin(email: $email, password: $password) {
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
  const [signin, { error }] = useMutation(mutation);
  const [formValues, setFormValues] = useState<FormValuesType>({
    email: '',
    password: '',
  });

  return (
    <>
      {error?.graphQLErrors.length && (
        <MessageBar messageBarType={MessageBarType.error}>{error.graphQLErrors[0].message}</MessageBar>
      )}
      <form onSubmit={async (e) => {
        e.preventDefault();
        const { email, password } = formValues;
        signin({
          variables: {
            email,
            password,
          }
        }).catch((err) => {
          console.log('err.graphQLErrors', err.graphQLErrors);
        });
      }}>
        <TextField
          label="Email"
          onChange={(e, newValue) => setFormValues(R.assoc('email', newValue || '', formValues))}
        />
        <TextField
          canRevealPassword
          label="Password"
          type="password"
          onChange={(e, newValue) => setFormValues(R.assoc('password', newValue || '', formValues))}
        />
        <PrimaryButton text="Signin" type="submit" />
      </form>
    </>
  );
};

export default Signup;