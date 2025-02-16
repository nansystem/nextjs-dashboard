interface FormInputProps {
  type: string;
  placeholder: string;
  name?: string;
  errors?: string[];
}

export default function InputForm({
  type,
  placeholder,
  name,
  errors,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <input
        className="rounded-md w-full h-10 focus:outline-none border-none placeholder:text-gray-500 p-2 text-black"
        type={type}
        name={name}
        placeholder={placeholder}
      />
      {errors && <p className="text-red-500">{errors.join(', ')}</p>}
    </div>
  );
}
