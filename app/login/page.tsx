// login/page.tsx

'use client';

import { useState } from 'react';
import Button from '@/app/components/Button';
import InputForm from '@/app/components/InputForm';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const handleClick = async () => {
    const res = await fetch('/api/userAuth', {
      method: 'POST',
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    });
    console.log(await res.json());
  };

  return (
    <div className="flex flex-col w-full  py-8 px-6">
      <div>
        <h2 className="text-2xl">Route Handlers Test</h2>
      </div>
      <form className="flex flex-col w-full gap-2">
        <InputForm
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={e =>
            setFormData(prev => ({ ...prev, email: e.target.value }))
          }
          errors={[]}
        />
        <InputForm
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={e =>
            setFormData(prev => ({ ...prev, password: e.target.value }))
          }
          errors={[]}
        />
        <span onClick={handleClick}>
          <Button text="Login" />
        </span>
      </form>
    </div>
  );
}
