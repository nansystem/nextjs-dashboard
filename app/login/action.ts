'use server';
const sleep = (ms: number) => new Promise(res => setTimeout(res, ms));

export async function handleClick({}: FormData) {
  //   console.log('email:', formData.get('email'));
  //   console.log('password:', formData.get('password'));
  await sleep(2000);
  return {
    errors: ['not valid password'],
  };
}

export interface ProfileFormProps {
  name: string;
  email: string;
}
export async function registerUser(
  prevState: ProfileFormProps,
  formData: FormData
) {
  await sleep(2000);
  console.log('registerUser called:', prevState, formData);
  const { email, password } = Object.fromEntries(formData);

  if (!email || !password) {
    return { error: 'Missing Fields. Failed to Create an Account.' };
  }
}
