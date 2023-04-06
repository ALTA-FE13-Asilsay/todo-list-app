import { FC, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  const { placeholder, id } = props;
  return (
    <input
      className="border rounded-lg bg-slate-300 text-slate-900 p-2 focus:outline-none focus:border-sky-800 focus:ring-1 focus:ring-sky-800 w-full transition ease-in-out duration-300 "
      {...props}
    />
  );
};

export const TextArea: FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = (
  props
) => {
  const { placeholder, id } = props;
  return (
    <textarea
      className="border rounded-lg bg-slate-300 text-slate-900 p-2 focus:outline-none focus:border-sky-800 focus:ring-1 focus:ring-sky-800 w-full transition ease-in-out duration-300 "
      {...props}
    />
  );
};
