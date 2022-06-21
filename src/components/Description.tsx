import {
  Stack, Heading,
} from '@chakra-ui/react';
import React from 'react';
import Feature from './Feature';

const features = [
  {
    id: 1,
    title: 'Join our team',
    description: 'We’re looking for amazing engineers just like you! Become a part of our rockstar engineering team and skyrocket your career!',
  },
  {
    id: 2,
    title: 'Join our team',
    description: 'We’re looking for amazing engineers just like you! Become a part of our rockstar engineering team and skyrocket your career!',
  },
  {
    id: 3,
    title: 'Join our team',
    description: 'We’re looking for amazing engineers just like you! Become a part of our rockstar engineering team and skyrocket your career!',
  },
  {
    id: 4,
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
