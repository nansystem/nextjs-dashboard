interface ButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export default function Button({
  text,
  type = 'submit',
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-500 w-full text-white h-10 disabled:bg-gray-500 disabled:text-neutral-300 disabled:cursor-not-allowed"
    >
      {text}
    </button>
  );
}
