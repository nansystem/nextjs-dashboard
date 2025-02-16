'use client';

interface ButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  pending?: boolean;
}

export default function Button({
  text,
  type = 'submit',
  onClick,
  pending,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-500 w-full text-white h-10 disabled:bg-gray-500 disabled:text-neutral-300 disabled:cursor-not-allowed"
    >
      {pending ? <span className="ml-2">Loading...</span> : text}
    </button>
  );
}
