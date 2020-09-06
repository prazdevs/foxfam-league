import { Link, useColorModeValue } from '@chakra-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarLink = ({ label, to, closeMenu }) => {
  const color = useColorModeValue('gray.800', 'white');
  return (
    <Link
      as={NavLink}
      to={to}
      onClick={closeMenu}
      exact={to === '/'}
      color={color}
      fontSize="lg"
      fontWeight="semibold"
      textTransform="uppercase"
      border="2px solid transparent"
      _activeLink={{ borderBottomColor: 'primary', color: 'primary' }}
      _hover={{ textDecoration: 'none', color: 'primary' }}
    >
      {label}
    </Link>
  );
};

export default NavbarLink;
