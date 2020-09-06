import {
  Flex,
  Icon,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/core';
import React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

const ColorModeSwitcher = () => {
  const { toggleColorMode } = useColorMode();
  const otherTheme = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FiMoon, FiSun);

  return (
    <Flex dir="row" align="center" onClick={toggleColorMode}>
      <Icon mr={2} as={SwitchIcon} />
      <Text>{`Switch to ${otherTheme} mode`}</Text>
    </Flex>
  );
};

export default ColorModeSwitcher;
