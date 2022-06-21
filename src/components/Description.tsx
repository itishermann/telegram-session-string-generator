import {
  Stack, Heading,
} from '@chakra-ui/react';
import React from 'react';
import Feature from './Feature';

const features = [
  {
    id: 1,
    title: 'Free and open source',
    description: 'The source code for this project is available on GitHub and open to contributions.',
  },
  {
    id: 2,
    title: 'Compatible with the popular libraries',
    description: 'Using the same API as Telegram. This means you can use this session string with Telegram and GramJs.',
  },
  {
    id: 3,
    title: 'Join our team',
    description: 'We’re looking for amazing engineers just like you! Become a part of our rockstar engineering team and skyrocket your career!',
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
