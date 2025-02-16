'use client';

import Button from '@/app/components/Button';
import { useActionState } from 'react';
import { RegisterState, registerUser } from '@/app/login/action';
import { FormElement } from '../components/FormElement';
import { RegisterErrors } from '../components/RegisterError';

const INITIAL_STATE: RegisterState = {
  name: 'hoge',
  email: 'hoge@email.com',
  zodErrors: null,
  registerErrors: null,
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
        <FormElement
          item="name"
          data={state.name}
          errors={state.zodErrors?.name}
        />
        <FormElement
          item="email"
          data={state.email}
          errors={state.zodErrors?.email}
        />
        {/* <InputForm type="email" name="email" placeholder="Email" />
        <InputForm type="password" name="password" placeholder="Password" /> */}
        <Button text="Login" type="submit" pending={pending} />
        <RegisterErrors registerErrors={state.registerErrors ?? null} />
      </form>
    </div>
  );
}
