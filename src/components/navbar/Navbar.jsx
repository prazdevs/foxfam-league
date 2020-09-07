import { Box, Flex, Heading, Image, Stack } from '@chakra-ui/core';
import { useColorModeValue } from '@chakra-ui/core';
import React, { useState } from 'react';

import fox from './assets/fox.svg';
import MenuButton from './MenuButton';
import NavbarDropdown from './NavbarDropdown';
import NavbarLink from './NavbarLink';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  const bgColor = useColorModeValue('gray.200', 'gray.700');

  const links = [
    { label: 'home', to: '/' },
    {
      label: 'standings',
      to: 'standings',
    },
    {
      label: 'teams',
      to: 'teams',
    },
    {
      label: 'players',
      to: 'players',
    },
  ];

  return (
    <Flex
      as="nav"
      h="55px"
      w="full"
      maxW="5xl"
      justify="space-between"
      wrap="wrap"
      pos="fixed"
      bgColor={bgColor}
      roundedBottom={{ lg: 'lg' }}
      zIndex={2}
      overflow={{ md: 'hidden' }}
    >
      <Flex p={2} h="full" align="center" color="primary">
        <Image src={fox} alt="Fox logo" h="full" />
        <Heading ml={2}>FFL</Heading>
      </Flex>
      <MenuButton handleToggle={handleToggle} />
      <Box
        display={{ base: show ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        bgColor={bgColor}
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          align="center"
          mx={4}
          spacing={4}
        >
          {links.map(({ label, to }) => (
            <NavbarLink
              fontSize="lg"
              key={to}
              to={to}
              label={label}
              closeMenu={() => setShow(false)}
            />
          ))}
        </Stack>
        <NavbarDropdown />
      </Box>
    </Flex>
  );
};

export default Navbar;
