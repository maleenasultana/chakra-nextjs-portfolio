'use cliect'

import React from 'react';
import { Box, Container, Stack, Text } from '@chakra-ui/react';
import Contact from "./Contact"

export default function SmallWithNavigation() {
  return (
    <div>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Stack direction={'row'} spacing={6}>

          
        </Stack>
        <Text>© 2022 All rights reserved</Text>
      </Container>
    </div>
  );
}
