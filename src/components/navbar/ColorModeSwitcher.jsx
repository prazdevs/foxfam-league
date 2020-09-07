import {
  Flex,
  Icon,
  MenuItem,
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
    <MenuItem onClick={toggleColorMode}>
      <Flex dir="row" align="center">
        <Icon mr={2} as={SwitchIcon} />
        <Text>{`Switch to ${otherTheme} mode`}</Text>
      </Flex>
    </MenuItem>
  );
};

export default ColorModeSwitcher;
