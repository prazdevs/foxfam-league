import {
  Button,
  Heading,
  HStack,
  IconButton,
  Link,
  Text,
  Tooltip,
  VStack,
} from '@chakra-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FiAtSign, FiLock } from 'react-icons/fi';
import { GrFacebookOption, GrGoogle } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';
import TextInput from './TextInput';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { logInWithGoogle } = useAuth();

  const onSubmit = data => console.log(data);

  return (
    <VStack spacing={8} mt={8}>
      <Heading alignSelf="left" size="lg">
        Log in
      </Heading>
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
      <VStack spacing={1}>
        <Text>or log in using</Text>
        <HStack>
          <Tooltip label="Google">
            <IconButton
              onClick={logInWithGoogle}
              aria-label="Login with Google"
              backgroundColor="#ea4335"
              color="white"
              size="lg"
              isRound
              icon={<GrGoogle />}
            />
          </Tooltip>
          <Tooltip label="Facebook">
            <IconButton
              aria-label="Login with Facebook"
              backgroundColor="#3b5998"
              color="white"
              size="lg"
              isRound
              icon={<GrFacebookOption />}
            />
          </Tooltip>
        </HStack>
      </VStack>
      <VStack spacing={0}>
        <Text>or create an account</Text>
        <Link
          fontSize="lg"
          fontWeight="medium"
          color="primary"
          as={NavLink}
          to="signup"
        >
          SIGN UP
        </Link>
      </VStack>
    </VStack>
  );
};

export default Login;
