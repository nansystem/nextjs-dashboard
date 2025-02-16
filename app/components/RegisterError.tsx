import { type RegisterErrors } from '@/app/login/action';

export function RegisterErrors({
  registerErrors,
}: {
  registerErrors: RegisterErrors;
}) {
  if (!registerErrors) return null;

  return (
    <div className="text-pink-500 text-md italic py-2">{registerErrors}</div>
  );
}
