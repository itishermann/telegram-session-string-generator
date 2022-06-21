import {
  Stack, Heading, Box, Input, Button,
  Text,
} from '@chakra-ui/react';
import React from 'react';

function Form() {
  return (
    <Stack
      bg="gray.50"
      rounded="xl"
      p={{ base: 4, sm: 6, md: 8 }}
      spacing={{ base: 8 }}
      maxW={{ lg: 'lg' }}
    >
      <Stack spacing={4}>
        <Heading
          color="gray.800"
          lineHeight={1.1}
          fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
        >
          Let&apos;s get started
          <Text
            as="span"
            bgGradient="linear(to-r, red.400,pink.400)"
            bgClip="text"
          >
            !
          </Text>
        </Heading>
        <Text color="gray.500" fontSize={{ base: 'sm', sm: 'md' }}>
          We’re looking for amazing engineers just like you! Become a part
          of our rockstar engineering team and skyrocket your career!
        </Text>
      </Stack>
      <Box as="form" mt={10}>
        <Stack spacing={4}>
          <Input
            placeholder="App Id"
            bg="gray.100"
            border={0}
            color="gray.500"
            _placeholder={{
              color: 'gray.500',
            }}
          />
          <Input
            placeholder="App Hash"
            bg="gray.100"
            border={0}
            color="gray.500"
            _placeholder={{
              color: 'gray.500',
            }}
          />
          <Input
            placeholder="+1 (___) __-___-___"
            bg="gray.100"
            border={0}
            color="gray.500"
            _placeholder={{
              color: 'gray.500',
            }}
          />
        </Stack>
        <Button
          fontFamily="heading"
          mt={8}
          w="full"
          bgGradient="linear(to-r, red.400,pink.400)"
          color="white"
          _hover={{
            bgGradient: 'linear(to-r, red.400,pink.400)',
            boxShadow: 'xl',
          }}
        >
          Submit
        </Button>
      </Box>
      form
    </Stack>
  );
}

export default Form;
