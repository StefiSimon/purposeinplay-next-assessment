'use client';
import {
  Box,
  Button,
  FormInput,
  OnboardingLayout,
  Separator,
  Typography,
  FacebookIcon,
  GoogleIcon,
  Link,
  Checkbox,
} from '../components';
import { useContext, useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { SignUpUser } from '../lib/graphql/schema/mutations/signUp';
import { AppRoutes } from '../lib/constants';
import { useRouter } from 'next/navigation';
import { AuthContext } from '../context/AuthProvider';

const steps = {
  referral: {
    label: 'Referral Code',
  },
  create: {
    label: 'Create Account',
  },
  setup: {
    label: 'Set Up Wallet',
  },
};

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [registerError, setRegisterError] = useState(null);
  const [registerUser, { loading, error, data }] = useMutation(SignUpUser);
  const router = useRouter();

  const { signIn } = useContext(AuthContext);

  useEffect(() => {
    setRegisterError(null);
  }, [email, password, passwordConfirmation]);

  if (error) {
    console.error('GraphQL Error:', error.message);
    if (error.networkError) {
      console.error('Network Error:', error.networkError);
    }
  }

  const handleCreateAccountClick = async (e: any) => {
    e.preventDefault();

    try {
      const { data } = await registerUser({
        variables: {
          email,
          password,
          passwordConfirmation,
        },
      });

      if (data.signUp.accessToken) {
        signIn?.(data.signUp);
        console.log('registered!');
      } else if (data.signUp.message) {
        setRegisterError(data.signUp.message);
      }
    } catch (err) {
      console.error('Registration error', err);
    }
  };

  const onGoToLoginClick = () => {
    router.push(AppRoutes.login);
  };

  return (
    <OnboardingLayout>
      <OnboardingLayout.Wizard steps={steps} activeStep={1} />
      <OnboardingLayout.Card>
        <Box direction="col" className="items-center">
          <Typography.h2>Create your Account</Typography.h2>
          <Box direction="row" className="gap-1 mt-1">
            <Typography.Paragraph>
              Already have an account?
            </Typography.Paragraph>
            <Link onClick={onGoToLoginClick}>Sign In</Link>
          </Box>
          <Box direction="row" className="w-full mt-8 mb-7 gap-2">
            <Button variant="surface" width="full" onClick={console.log}>
              <GoogleIcon />
              Google
            </Button>
            <Button variant="surface" width="full" onClick={console.log}>
              <FacebookIcon />
              Facebook
            </Button>
          </Box>
        </Box>
        <Separator />
        <Box direction="col" className="gap-4">
          <FormInput
            id="email"
            name="email"
            type="text"
            label="Email"
            placeholder="headagok@email.com"
            onChange={setEmail}
          />
          <FormInput
            id="password"
            name="password"
            type="password"
            label="Password"
            placeholder="*************"
            onChange={setPassword}
          />
          <FormInput
            id="passwordConfirmation"
            name="passwordConfirmation"
            type="password"
            label="Password Confirmation"
            placeholder="*************"
            onChange={setPasswordConfirmation}
          />
        </Box>
        <Box direction="row" className="justify-start gap-2 my-6">
          <Checkbox
            checked
            label={
              <Typography.Paragraph className="font-inter">
                By using this service, you agree to our <b>Terms of Use </b>
                and Privacy Policy
              </Typography.Paragraph>
            }
            onClick={console.log}
          />
        </Box>
        {registerError && (
          <div className="text-xs text-alert mb-6">
            Registration failed: {registerError}
          </div>
        )}
        <Button
          variant="primary"
          size="small"
          width="full"
          onClick={handleCreateAccountClick}
        >
          Create Account
        </Button>
      </OnboardingLayout.Card>
    </OnboardingLayout>
  );
}
