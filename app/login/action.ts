'use server';

export async function handleClick({}: FormData) {
  //   console.log('email:', formData.get('email'));
  //   console.log('password:', formData.get('password'));
  await new Promise(resolve => setTimeout(resolve, 2000));
  return {
    errors: ['not valid password'],
  };
}
