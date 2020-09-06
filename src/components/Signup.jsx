import { Button, Heading, Link, Text, VStack } from '@chakra-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FiAtSign, FiKey, FiLock } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

import TextInput from './TextInput';

const Signup = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => console.log(data);

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
            type="email"
            register={register}
          />
          <TextInput
            label="Password"
            name="password"
            icon={FiLock}
            placeholder="Type your password"
            type="password"
            register={register}
          />
          <TextInput
            label="Password verification"
            name="passwordVerification"
            icon={FiKey}
            placeholder="Re-type your password"
            type="password"
            register={register}
          />
          <Button rounded="full" bgColor="primary" type="submit">
            SIGN UP
          </Button>
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
