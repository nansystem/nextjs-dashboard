'use client';

import Button from '@/app/components/Button';
import { useActionState } from 'react';
import { ProfileFormProps, registerUser } from '@/app/login/action';
import { FormElement } from '../components/FormElement';

const INITIAL_STATE: ProfileFormProps = {
  name: 'hoge',
  email: 'hoge@email.com',
};

export default function Login() {
  const [state, formAction, pending] = useActionState(
    registerUser,
    INITIAL_STATE
  );

  return (
    <div className="flex flex-col w-full  py-8 px-6">
      <div>
        <h2 className="text-2xl">Route Handlers Test</h2>
      </div>
      <form className="flex flex-col w-full gap-2" action={formAction}>
        <FormElement item="name" data={state.name} />
        <FormElement item="email" data={state.email} />
        {/* <InputForm type="email" name="email" placeholder="Email" />
        <InputForm type="password" name="password" placeholder="Password" /> */}
        <Button text="Login" type="submit" pending={pending} />
      </form>
    </div>
  );
}
