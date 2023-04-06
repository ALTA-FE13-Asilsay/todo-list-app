import { FC, ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const Button: FC<Props> = (props) => {
  const { label } = props;

  return (
    <button
      className="bg-sky-700 text-slate-200 font-bold py-2 px-8 w-full
    rounded-lg border border-white dark:border-slate-600 hover:bg-sky-600 active:bg-sky-800 disabled:bg-sky-900"
      {...props}
    >
      {label}
    </button>
  );
};

export const ButtonRed: FC<Props> = (props) => {
  const { label } = props;

  return (
    <button
      className="bg-red-700 text-slate-200 font-bold py-2 px-8 w-full
    rounded-lg border border-white dark:border-slate-600 hover:bg-red-800 active:bg-red-800 disabled:bg-red-900"
      {...props}
    >
      {label}
    </button>
  );
};

export const ButtonGreen: FC<Props> = (props) => {
  const { label } = props;

  return (
    <button
      className="bg-green-700 text-slate-200 font-bold py-2 px-8 w-full
    rounded-lg border border-white dark:border-slate-600 hover:bg-green-800 active:bg-green-800 disabled:bg-green-900"
      {...props}
    >
      {label}
    </button>
  );
};
