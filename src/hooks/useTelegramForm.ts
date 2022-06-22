/* eslint-disable no-alert */
import { useFormik } from 'formik';
import { useToast, useClipboard } from '@chakra-ui/react';
import { schemas } from 'utilities';
import { TelegramClient, Api } from 'telegram';
import { StringSession } from 'telegram/sessions';
import { useState, useEffect } from 'react';

const useTelegramForm = () => {
  const toast = useToast();
  const [session, setSession] = useState<string>('1BAAWdmVzdGEud2ViLnRlbGVncmFtLm9yZwBQQnijsmPwXnN6edtm9WhlS8/KpyTVtV9qAEct14zHlnU93aC6+gUYZxg/JBd4aTZDxLMgMbtyOT0HxHuCDH6lE0NasJ+c6iGEmygww0siWWpsaT58Y3jvua3mDPGYtyKDoqsQvgyOdHJ82ixBnFlvLqpLMojMClucKet0RcYGxI7ZnOmDAWan+zz8/5XWCa2fcvdrf988XLGUlWhNQPBuL0Cc/8tP5ejZmpDBF0p8CqkgekrryGi8qpxJ+f2yN1+9WPOuxMSTnQy/q7OkMsI/TnUDN1QOc4uhKCEmCBd8ui1XJ+LtY9qKStHXBcXPzC2D8mAx5cWQEtnL2a6ICQLCWA==');
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
    phoneNumber: '0033784981769',
    appId: '9933353',
    appHash: '850e4d62ac2c5405384c0f6d5211bdad',
    exportAuthorization: false,
    exportDcId: 0,
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
    onSubmit: async ({
      appHash, appId, phoneNumber, exportAuthorization,
    }) => {
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
        if (exportAuthorization) {
          const result: Api.Config = await client.invoke(
            new Api.help.GetConfig(),
          );
          console.log(result);
        }
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
