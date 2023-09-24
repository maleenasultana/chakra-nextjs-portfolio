
"use client"
import React from 'react';
import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';

function StatsCard(props) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <StatLabel fontWeight={'medium'} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

export default function BasicStatistics() {
  return (
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'}>
       My Work Includes
      </chakra.h1>
      <SimpleGrid mt={5} columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={'Health'} stat={'Fitness, Diseases, Cure'} />
        <StatsCard title={'Education'} stat={'Schools, Colleges, Institutions'} />
        <StatsCard title={'Personalities'} stat={'Actors, scientists, Legends'} />
      </SimpleGrid>
      
      <SimpleGrid mt={5} columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={'Technology'} stat={'Tech Stacks'} />
        <StatsCard title={'Latest'} stat={'Road Map to Latest Courses'} />
        <StatsCard title={'Network'} stat={'Cloud computing, AWS, Deployments'} />
      </SimpleGrid>
      
      <SimpleGrid mt={5} mb={20} columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={'Parents'} stat={'Parental Guidance, Rights, Advisory'} />
        <StatsCard title={'Insurance Plans'} stat={'Old Age, Education, Life Insurance'} />
        <StatsCard title={'Climate'} stat={'Global Warming, Weather Changes, Food & Weather'} />
      </SimpleGrid>
      
    </Box>
  );
}
