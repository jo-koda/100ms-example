'use client';

import { RootState } from '@/store';

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from '@nextui-org/react';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { useFormState } from 'react-dom';
import { useTranslations } from 'next-intl';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { SubmitButton } from '@/components/submit-button';
import { passwordEyeToggled } from '../_redux/sign-in-slice';
import { signInUser } from '@/actions/room-actions';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

export default function Form() {
  const t = useTranslations('SignIn');
  const state = useAppSelector((state: RootState) => state.signInState);
  const dispatch = useAppDispatch();
  const [formState, formAction] = useFormState(signInUser, null);

  useEffect(() => {
    if (formState?.success === false) {
      toast(formState.error, {
        type: 'error',
        position: 'top-center',
        autoClose: 1000,
        theme: 'colored',
      });
    }
  }, [formState]);

  return (
    <form action={formAction}>
      {/* <div className="text-sm text-red-500 text-center">
        {formState?.error}
      </div> */}
      <Card className="w-[500px] p-12">
        <CardHeader className="flex flex-col">
          <h1 className="text-2xl font-bold">{t('signIn')}</h1>
          <span className="text-large"> Please sign in to continue </span>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            type="email"
            name="email"
            placeholder={t('emailAddress')}
            isRequired
          />
          <Input
            name="password"
            placeholder={t('password')}
            type={state.password.obscure ? 'password' : 'text'}
            endContent={
              <button
                type="button"
                tabIndex={-1}
                onClick={() => dispatch(passwordEyeToggled())}
              >
                {state.password.obscure ? (
                  <FiEyeOff color="#FFF" />
                ) : (
                  <FiEye color="#fff" />
                )}
              </button>
            }
            isRequired
          />
          {/* <div className='text-sm text-red-500'>{formState?.message}</div> */}
        </CardBody>
        <CardFooter>
          <SubmitButton>{t('signIn')}</SubmitButton>
        </CardFooter>
      </Card>
    </form>
  );
}
