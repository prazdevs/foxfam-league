import { Button, VStack, Link } from '@chakra-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FiAtSign, FiLock } from 'react-icons/fi';

import { useAuth } from '../hooks/useAuth';
import TextInput from './TextInput';

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const { logInWithCredentials } = useAuth();

  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={4}>
        <TextInput
          label="Email"
          name="email"
          icon={FiAtSign}
          placeholder="Type your email"
          type="email"
          register={register}
        />
        <VStack spacing={0}>
          <TextInput
            label="Password"
            name="password"
            icon={FiLock}
            placeholder="Type your password"
            type="password"
            register={register}
          />
          <Link color="primary" alignSelf="flex-end" fontSize="sm">
            Forgot your passord?
          </Link>
        </VStack>
        <Button rounded="full" bgColor="primary" type="submit">
          LOGIN
        </Button>
      </VStack>
    </form>
  );
};

export default LoginForm;
