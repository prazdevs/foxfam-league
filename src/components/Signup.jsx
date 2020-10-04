import { Button, Heading, Link, Text, VStack } from '@chakra-ui/core';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { FiAtSign, FiKey, FiLock } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { validate as validateEmail } from 'email-validator';

import TextInput from './TextInput';
import { useAuth } from '../hooks/useAuth';
import { useRouter } from '../hooks/useRouter';

const Signup = () => {
  const { register, handleSubmit, errors, watch, formState } = useForm();
  const { isSubmitting } = formState;

  const { signUpWithCredentials } = useAuth();

  const { push } = useRouter();

  const password = useRef({});
  password.current = watch('password', '');
  const validatePassword = pass => {
    return password.current === pass || 'Invalid validation';
  };

  const onSubmit = async ({ email, password, passwordVerification }) => {
    if (password !== passwordVerification) return;
    await signUpWithCredentials(email, password);
    push('/');
  };

  return (
    <VStack spacing={8} mt={8}>
      <Heading alignSelf="left" size="lg">
        Create an account
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4}>
          <TextInput
            label="Email"
            name="email"
            icon={FiAtSign}
            placeholder="Type your email"
            error={errors.email?.message}
            register={register({
              required: 'Please provide an email.',
              validate: value =>
                validateEmail(value) || 'Please provide a valid email.',
            })}
          />
          <TextInput
            label="Password"
            name="password"
            icon={FiLock}
            placeholder="Type your password"
            type="password"
            error={errors.password?.message}
            register={register({
              minLength: {
                value: 6,
                message: 'Password is too short.',
              },
            })}
          />
          <TextInput
            label="Password verification"
            name="passwordVerification"
            icon={FiKey}
            placeholder="Re-type your password"
            type="password"
            error={errors.passwordVerification?.message}
            register={register({
              validate: validatePassword,
            })}
          />
          <Button rounded="full" bgColor="primary" type="submit">
            SIGN UP
          </Button>
          {isSubmitting ? 'SUBMITTING NOW' : ''}
        </VStack>
      </form>
      <VStack spacing={0}>
        <Text>already have an account?</Text>
        <Link
          fontSize="lg"
          fontWeight="medium"
          color="primary"
          as={NavLink}
          to="login"
        >
          LOG IN
        </Link>
      </VStack>
    </VStack>
  );
};

export default Signup;
