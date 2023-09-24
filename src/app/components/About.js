'use client';

import React from 'react';
import { Avatar, Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';

export default function WithLargeQuote() {
  return (
    <Stack
      bg={useColorModeValue('gray.50', 'gray.800')}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Text fontSize={{ base: 'xl', md: '2xl' }} textAlign={'center'} maxW={'3xl'}>
      "As a versatile Full Stack Developer with a deep passion for crafting engaging articles 
      and persuasive blog posts,  I excel in producing high-quality content that consistently
       surpasses expectations. I thrive on diving into challenging tasks,
       where I create meaningful solutions that truly make a difference."
      </Text>
      <Box textAlign={'center'}>
        <Avatar
          src="../../../image.jpeg"
          mb={2}
        />

        <Text fontWeight={600}>Maleena Sultana</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Full Stack Developer / Content Writer
        </Text>
      </Box>
    </Stack>
  );
}
