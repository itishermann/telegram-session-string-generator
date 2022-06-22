import {
  Stack, Heading, Box, Input, Button,
  Text,
  FormControl,
  FormErrorMessage,
  Link,
  FormLabel,
  Switch,
  Collapse,
} from '@chakra-ui/react';
import { ExternalLinkIcon, WarningTwoIcon } from '@chakra-ui/icons';
import React from 'react';
import { useTelegramForm } from 'hooks';
import ResultBox from './ResultBox';

function Form() {
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    isSubmitting,
    isValid,
    touched,
    values,
    session,
    onCopy,
  } = useTelegramForm();
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
          Let&apos;s do this
          <Text
            as="span"
            bgGradient="linear(to-r, red.400,pink.400)"
            bgClip="text"
          >
            !
          </Text>
        </Heading>
        <Text color="gray.500" fontSize={{ base: 'sm', sm: 'md' }}>
          Before all, you need to register on Telegram.
          <br />
          Then you will need to
          {' '}
          <Link
            color="pink.400"
            href="https://my.telegram.org/auth"
            target="_blank"
            rel="noreferrer"
            isExternal
          >
            generate an app id and app hash
            {' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
          {' '}
          from telegram.
          <br />
          Finally fill this form to get your session string.
          <br />
          <br />
          <WarningTwoIcon color="orange.400" />
          {' '}
          You may be prompted for the code
          received via Telegram or SMS and your password/2FA if you set one up.
        </Text>
      </Stack>
      <form onSubmit={handleSubmit}>
        <Box>
          <Stack spacing={4}>
            <FormControl isInvalid={touched.appId && !!errors.appId} isRequired>
              <Input
                placeholder="App Id"
                bg="gray.100"
                border={0}
                color="gray.500"
                _placeholder={{
                  color: 'gray.500',
                }}
                value={values.appId}
                onChange={handleChange('appId')}
                onBlur={handleBlur('appId')}
                isInvalid={touched.appId && !!errors.appId}
              />
              {touched.appId && !!errors.appId && (
                <FormErrorMessage>
                  {errors.appId}
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={touched.appHash && !!errors.appHash} isRequired>
              <Input
                placeholder="App Hash"
                bg="gray.100"
                border={0}
                color="gray.500"
                _placeholder={{
                  color: 'gray.500',
                }}
                value={values.appHash}
                onChange={handleChange('appHash')}
                onBlur={handleBlur('appHash')}
                isInvalid={touched.appHash && !!errors.appHash}
              />
              {touched.appHash && !!errors.appHash && (
                <FormErrorMessage>
                  {errors.appHash}
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={touched.phoneNumber && !!errors.phoneNumber} isRequired>
              <Input
                placeholder="+1 (___) __-___-___"
                bg="gray.100"
                border={0}
                color="gray.500"
                _placeholder={{
                  color: 'gray.500',
                }}
                value={values.phoneNumber}
                onChange={handleChange('phoneNumber')}
                onBlur={handleBlur('phoneNumber')}
                isInvalid={touched.phoneNumber && !!errors.phoneNumber}
              />
              {touched.phoneNumber && !!errors.phoneNumber && (
              <FormErrorMessage>
                {errors.phoneNumber}
              </FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={touched.exportAuthorization && !!errors.exportAuthorization} isRequired flexDirection="row" display="flex">
              <FormLabel color="gray.500" htmlFor="export-authorization" colorScheme="blue">
                Export the authorization
              </FormLabel>
              <Switch
                sx={{ 'span.chakra-switch__track:not([data-checked])': { backgroundColor: 'gray.300' } }}
                id="export-authorization"
                isChecked={values.exportAuthorization}
                onChange={handleChange('exportAuthorization')}
                onBlur={handleBlur('exportAuthorization')}
                isInvalid={touched.exportAuthorization && !!errors.exportAuthorization}
                colorScheme="pink"
              />
            </FormControl>
            <Collapse startingHeight={-1} in={values.exportAuthorization}>
              <FormControl
                isInvalid={touched.exportDcId && !!errors.exportDcId}
                isRequired={values.exportAuthorization}
              >
                <Input
                  placeholder="Destination Data Center (DC id)"
                  bg="gray.100"
                  border={0}
                  color="gray.500"
                  _placeholder={{
                    color: 'gray.500',
                  }}
                  value={values.exportDcId}
                  onChange={handleChange('exportDcId')}
                  onBlur={handleBlur('exportDcId')}
                  isInvalid={touched.exportDcId && !!errors.exportDcId}
                />
                {touched.exportDcId && !!errors.exportDcId && (
                  <FormErrorMessage>
                    {errors.exportDcId}
                  </FormErrorMessage>
                )}
              </FormControl>
            </Collapse>
          </Stack>
          <Button
            onClick={() => handleSubmit()}
            disabled={!isValid || isSubmitting}
            isLoading={isSubmitting}
            type="submit"
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
            Generate
          </Button>
        </Box>
      </form>
      <ResultBox session={session} onCopy={onCopy} />
    </Stack>
  );
}

export default Form;
