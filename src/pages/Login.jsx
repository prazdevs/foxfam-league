import {
  Heading,
  HStack,
  IconButton,
  Link,
  Text,
  Tooltip,
  VStack,
} from '@chakra-ui/core';
import React from 'react';
import { GrFacebookOption, GrGoogle } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';
import LoginForm from '../components/LoginForm';

const Login = () => {
  const { logInWithGoogle, logInWithFacebook } = useAuth();

  return (
    <VStack spacing={8} mt={8}>
      <Heading alignSelf="left" size="lg">
        Log in
      </Heading>
      <LoginForm />
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
              onClick={logInWithFacebook}
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
