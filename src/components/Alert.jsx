/* eslint-disable react/prop-types */
import { twMerge } from "tailwind-merge";

const Alert = ({ bgColor, children, className, ...rest }) => {
  const colors = {
    info: "bg-sky-300 ",
    warning: "bg-yellow-300 ",
    success: "bg-green-300 ",
    error: "bg-red-300 ",
  };
  return (
    <h2
      className={twMerge(
        "inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-center rounded-lg w-full",
        colors[bgColor],
        className
      )}
      {...rest}
    >
      {children}
    </h2>
  );
};

export default Alert;
