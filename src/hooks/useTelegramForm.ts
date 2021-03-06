/* eslint-disable no-alert */
import { useFormik } from 'formik';
import { useToast, useClipboard } from '@chakra-ui/react';
import { schemas } from 'utilities';
import { TelegramClient } from 'telegram';
import { StringSession } from 'telegram/sessions';
import { useState, useEffect } from 'react';

const useTelegramForm = () => {
  const toast = useToast();
  const [session, setSession] = useState<string>('');
  const { hasCopied, onCopy } = useClipboard(session);

  useEffect(() => {
    if (hasCopied) {
      toast({
        title: 'Copied to clipboard',
        description: 'You can now paste it in your Telegram app',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    }
  }, [hasCopied]);

  const initialValues = {
    phoneNumber: '',
    appId: '',
    appHash: '',
  };

  const {
    values,
    isSubmitting,
    isValid,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: schemas.telegram,
    onSubmit: async ({ appHash, appId, phoneNumber }) => {
      try {
        const sessionStorage = new StringSession('');
        const client = new TelegramClient(
          sessionStorage,
          parseInt(appId, 10),
          appHash,
          {
            connectionRetries: 5,
            floodSleepThreshold: 24 * 60 * 60,
          },
        );
        await client.start({
          phoneNumber,
          phoneCode: async (viaApp) => {
            const code = window.prompt(`Enter the code received via ${viaApp ? 'Telegram' : 'SMS'}`, '');
            if (!code) {
              toast({
                title: 'Code is required',
                description: 'Please enter the code received via SMS or Telegram',
                status: 'error',
              });
              throw new Error('The code is required');
            }
            return code;
          },
          password: async (hint) => {
            const code = window.prompt(hint || 'Enter your password', '');
            if (!code) {
              toast({
                title: hint ?? 'Password is required',
                description: 'Please enter your password',
                status: 'error',
              });
              throw new Error('The code is required');
            }
            return code;
          },
          onError: (error) => {
            toast({
              title: 'Error',
              description: error.message,
              status: 'error',
            });
          },
        });
        const sessionString = sessionStorage.save();
        setSession(sessionString);
        toast({
          description: 'Your session string have been generated, please keep it safe. You can use it to login to your account.',
          title: 'Session string generated',
          status: 'success',
        });
      } catch (error: any) {
        toast({
          title: 'Error',
          description: error.message,
          status: 'error',
        });
      }
    },
  });

  return {
    values,
    isSubmitting,
    isValid,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    onCopy,
    session,
  };
};

export default useTelegramForm;
