import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/core';
import React from 'react';

const TextInput = ({
  icon,
  name,
  register,
  placeholder,
  label,
  error,
  type = 'text',
}) => {
  return (
    <FormControl isInvalid={error}>
      <FormLabel color={error ? 'red.300': ''} htmlFor={name} mb={0}>
        {label}
      </FormLabel>
      <InputGroup variant="flushed">
        {icon ? (
          <InputLeftElement>
            <Icon color={error ? 'red.300' : ''} as={icon} />
          </InputLeftElement>
        ) : null}
        <Input
          id={name}
          name={name}
          type={type}
          focusBorderColor="primary"
          placeholder={placeholder}
          ref={register}
          isInvalid={error}
        />
      </InputGroup>
      <FormErrorMessage >{error}</FormErrorMessage>
    </FormControl>
  );
};

export default TextInput;
