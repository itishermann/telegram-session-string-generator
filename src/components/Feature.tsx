import React from 'react';
import { CheckIcon, Icon } from '@chakra-ui/icons';
import {
  HStack, Box, VStack, Text,
} from '@chakra-ui/react';

interface FeatureProps {
  title: string;
  description: string;
}

function Feature({ title, description }:FeatureProps) {
  return (
    <HStack align="top">
      <Box color="green.400" px={2}>
        <Icon as={CheckIcon} />
      </Box>
      <VStack align="start">
        <Text fontWeight={600}>{title}</Text>
        <Text color="gray.600">{description}</Text>
      </VStack>
    </HStack>
  );
}

export default Feature;
