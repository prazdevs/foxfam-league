import {
  FormControl,
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
  type = 'text',
}) => {
  return (
    <FormControl>
      <FormLabel htmlFor={name} mb={0}>
        {label}
      </FormLabel>
      <InputGroup variant="flushed">
        {icon ? (
          <InputLeftElement>
            <Icon as={icon} />
          </InputLeftElement>
        ) : null}
        <Input
          id={name}
          name={name}
          type={type}
          focusBorderColor="primary"
          placeholder={placeholder}
          ref={register}
        />
      </InputGroup>
    </FormControl>
  );
};

export default TextInput;
