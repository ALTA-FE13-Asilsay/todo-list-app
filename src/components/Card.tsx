import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  content: string;
  description: string;
  priority: number;
  id: string;
}

export const Card: FC<Props> = (props) => {
  const { content, description, priority, id } = props;
  const isCompleted = priority === 1 ? "COMPLETED" : "NOT COMPLETED";
  const taskDone = isCompleted === "COMPLETED" ? true : false;

  return (
    <Link to={`/detailed/${id}`}>
      <div
        className={`${
          taskDone ? " bg-red-500" : "bg-inherit"
        } flex items-center justify-between border-2 border-slate-50 dark:border-slate-600 rounded-lg p-2`}
      >
        <p
          className={`${
            taskDone ? "line-through" : "bg-inherit"
          } text-sm text-slate-900 dark:text-slate-200 uppercase`}
        >
          {content}
        </p>
        <p className="text-sm text-slate-900 dark:text-slate-200">
          {isCompleted}
        </p>
      </div>
    </Link>
  );
};

export const CardDetail: FC<Props> = (props) => {
  const { content, description, priority, id } = props;
  const isCompleted = priority === 1 ? "COMPLETED" : "NOT COMPLETED";
  const taskDone = isCompleted === "COMPLETED" ? true : false;

  return (
    <div className="h-60 md:h-full flex flex-col gap-3 border-2 border-slate-50 dark:border-slate-600 rounded-lg p-2 divide-y divide-slate-50 dark:divide-slate-600">
      <div className="flex-col md:flex-row flex items-center justify-between ">
        <p className="text-lg text-slate-900 dark:text-slate-200">
          Title Task: {content}
        </p>
        <p className="text-lg text-slate-900 dark:text-slate-200">
          {isCompleted}
        </p>
      </div>
      <div className="flex items-start text-start  overflow-auto">
        <p className="text-lg text-slate-900 dark:text-slate-200 ">
          Description: {description}
        </p>
      </div>
    </div>
  );
};
