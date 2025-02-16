import { Input } from './ui/input';
import { ZodErrors } from './ZodErrors';

export const FormElement = ({
  item,
  data = '',
  errors = [],
}: {
  item: string;
  data?: string;
  errors?: string[] | null;
}) => {
  return (
    <div className="grid justify-items-start gap-2">
      <label htmlFor={item}>{item}</label>
      <Input
        id={item}
        name={item}
        placeholder={item}
        defaultValue={data}
        className="border border-gray-300 rounded-md text-white-700 bg-zinc-700"
      />
      {errors && <ZodErrors error={errors} />}
    </div>
  );
};
