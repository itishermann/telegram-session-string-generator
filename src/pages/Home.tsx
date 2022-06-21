import React from 'react';
import {
  Box,
  Container,
  SimpleGrid,
} from '@chakra-ui/react';
import {
  Blur, Description, Footer, Form,
} from 'components';

export default function Home() {
  return (
    <Box position="relative">
      <Container
        as={SimpleGrid}
        maxW="7xl"
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Description />
        <Form />
      </Container>
      <Footer />
      <Blur
        position="absolute"
        top={-10}
        left={-10}
        style={{ filter: 'blur(70px)' }}
      />
    </Box>
  );
}
