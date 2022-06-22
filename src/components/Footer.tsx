import {
  Box, useColorModeValue, Container, Stack, Text,
  Link,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import React from 'react';

function Footer() {
  return (
    <Box
      color={useColorModeValue('gray.700', 'gray.200')}
      bottom={0}
    >
      <Container
        as={Stack}
        maxW="6xl"
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text>
          Built with ❤️ by
          {' '}
          <Link
            color="pink.400"
            href="https://hermann-kao.com"
            target="_blank"
            rel="noreferrer"
            isExternal
          >
            itishermann
          </Link>
        </Text>
        <Stack direction="row" spacing={6}>
          <Link
            color="pink.400"
            href="https://github.com/itishermann/telegram-session-string-generator"
            target="_blank"
            rel="noreferrer"
            isExternal
          >
            Source Code on GitHub
            {' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
