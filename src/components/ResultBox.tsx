import {
  Box, Tooltip, Stack, Text,
} from '@chakra-ui/react';
import React from 'react';

interface ResultBoxProps {
  session: string;
  onCopy: () => void;
}

function ResultBox({ session, onCopy }:ResultBoxProps) {
  return (
    <Stack>
      <Text color="gray.500" fontSize={{ base: 'sm', sm: 'md' }}>Your session string (Click to copy it):</Text>
      <Tooltip label="Click to copy">
        <Box bg="gray.100" borderRadius="md" height="24" padding="4" overflow="auto" onClick={() => onCopy()}>
          <Text color="gray.600" fontSize={{ base: 'sm', sm: 'md' }}>{session}</Text>
        </Box>
      </Tooltip>
    </Stack>
  );
}

export default ResultBox;
