'use server';
import { z } from 'zod';

const sleep = (ms: number) => new Promise(res => setTimeout(res, ms));

export async function handleClick({}: FormData) {
  //   console.log('email:', formData.get('email'));
  //   console.log('password:', formData.get('password'));
  await sleep(2000);
  return {
    errors: ['not valid password'],
  };
}

const registerDB = async (data: ProfileFormProps) => {
  try {
    await sleep(2000);
    return { data: data, error: null };
  } catch (error) {
    console.log('error:', error);
    return { data: null, error: error as RegisterErrors };
  }
};

const schemaRegister = z.object({
  name: z
    .string()
    .min(3, { message: 'ユーザー名は3文字以上で入力してください' })
    .max(10, { message: 'ユーザー名は10文字以内で入力してください' }),
  email: z
    .string()
    .email({ message: '有効なメールアドレスを入力してください' }),
});

export interface ProfileFormProps {
  name: string;
  email: string;
}

export type RegisterErrors = string | null;
export type ZodErrors = {
  name?: string[];
  email?: string[];
} | null;
export type RegisterState = ProfileFormProps & {
  zodErrors?: ZodErrors;
  registerErrors?: RegisterErrors;
};
export async function registerUser(
  prevState: ProfileFormProps,
  formData: FormData
): Promise<RegisterState> {
  console.info('registerUserです');
  const validatedFields = schemaRegister.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
  });

  const rawFormData = Object.fromEntries(formData);

  // 型ガード
  const payload = {
    name: typeof rawFormData.name === 'string' ? rawFormData.name : '',
    email: typeof rawFormData.email === 'string' ? rawFormData.email : '',
  };

  // zod validtion
  if (!validatedFields.success) {
    console.info('入力エラーがあります。修正してください');
    return {
      ...payload,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      registerErrors: null,
    };
  }

  const responseData = await registerDB(validatedFields.data);
  if (responseData.data) {
    return {
      ...payload,
      zodErrors: null,
      registerErrors: 'ユーザー登録に成功しました',
    };
  }
  if (responseData.error) {
    console.info('ユーザー登録に失敗しました');
    return {
      ...payload,
      zodErrors: null,
      registerErrors: null,
    };
  }

  console.info('finished', responseData);
  return prevState;
}
