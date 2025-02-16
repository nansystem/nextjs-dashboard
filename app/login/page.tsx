'use client';

import Button from '@/app/components/Button';
import InputForm from '@/app/components/InputForm';
import { useActionState } from 'react';
import { handleClick } from '@/app/login/action';

export default function Login() {
  const [state, formAction] = useActionState(handleClick, {
    errors: [],
  });

  return (
    <div className="flex flex-col w-full  py-8 px-6">
      <div>
        <h2 className="text-2xl">Route Handlers Test</h2>
      </div>
      <form className="flex flex-col w-full gap-2" action={formAction}>
        <InputForm type="email" name="email" placeholder="Email" />
        <InputForm
          type="password"
          name="password"
          placeholder="Password"
          errors={state.errors}
        />
        <Button text="Login" type="submit" />
      </form>
    </div>
  );
}
