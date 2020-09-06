import { Box, Icon } from '@chakra-ui/core';
import React from 'react';
import { FiMenu } from 'react-icons/fi';

const MenuButton = ({ handleToggle }) => {
  return (
    <Box
      display={{ base: 'flex', md: 'none' }}
      alignItems="center"
      fontSize={28}
      p={2}
      onClick={handleToggle}
    >
      <Icon as={FiMenu} />
    </Box>
  );
};

export default MenuButton;
