import {
  Avatar,
  Button,
  Flex,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from '@chakra-ui/core';
import React from 'react';
import { FiChevronDown, FiLogIn, FiLogOut } from 'react-icons/fi';

import { useAuth } from '../../hooks/useAuth';
import { useRouter } from '../../hooks/useRouter';
import ColorModeSwitcher from './ColorModeSwitcher';

const NavbarDropdown = () => {
  const { user, logOut } = useAuth();
  const { push } = useRouter();
  const bgColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Flex justify="center" py={{ base: 2, md: 0 }}>
      <Menu>
        <MenuButton
          rounded="full"
          p={1}
          mx={2}
          as={Button}
          rightIcon={<FiChevronDown />}
        >
          <HStack align="center">
            <Avatar size="sm" src={user ? user.photoURL : null} />
            <Text fontWeight="lighter" fontSize="lg">
              {user ? user.displayName : 'Not connected'}
            </Text>
          </HStack>
        </MenuButton>
        <MenuList bgColor={bgColor} border="none">
          <MenuItem>
            <ColorModeSwitcher />
          </MenuItem>
          <MenuItem>
            <Flex
              dir="row"
              align="center"
              onClick={user ? logOut : () => push('login')}
            >
              <Icon as={user ? FiLogOut : FiLogIn} mr={2} />
              {user ? 'Logout' : 'Login'}
            </Flex>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default NavbarDropdown;
