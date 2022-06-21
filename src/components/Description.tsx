import {
  Stack, Heading,
} from '@chakra-ui/react';
import React from 'react';
import Feature from './Feature';

const features = [
  {
    id: 1,
    title: 'Free and open source',
    description: 'The source code for this project is available on GitHub and open to contributions. Feel free to roast my code.',
  },
  {
    id: 2,
    title: 'Compatible with the popular libraries',
    description: 'Using the same API as Telegram. This means you can use this session string with Telegram, GramJs, Gryzle, and many other libraries.',
  },
  {
    id: 3,
    title: 'We respect your privacy',
    description: 'We do not collect any personal data from you. Your session string is not stored. Everything is handled by your browser.',
  },
  {
    id: 4,
    title: 'You must have already registered on Telegram',
    description: 'This app is not intended to be used by users who have not registered on Telegram. You must have an telegram account in order to generate an session string.',
  },
];

function Description() {
  return (
    <Stack spacing={{ base: 10, md: 20 }}>
      <Heading
        lineHeight={1.1}
        fontSize={{
          base: '3xl', sm: '4xl', md: '5xl', lg: '6xl',
        }}
      >
        Telegram Session string generator
      </Heading>
      <Stack spacing={4} align="center">
        {features.map(({ id, title, description }) => (
          <Feature key={id} title={title} description={description} />
        ))}
      </Stack>
    </Stack>
  );
}

export default Description;
