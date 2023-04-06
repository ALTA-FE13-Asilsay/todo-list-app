import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Contain: FC<Props> = (props) => {
  return (
    <div className="w-[80%] h-[90%] md:w-[70%] md:h-[80%] lg:w-[80%] lg:h-[90%] flex flex-col justify-center items-center bg-slate-200 dark:bg-slate-700 rounded-lg">
      {props.children}
    </div>
  );
};

export default Contain;
