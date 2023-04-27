import React from "react";

interface IButtonProps {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick: () => void;
  disabled?: boolean;
  outline?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  label,
  secondary,
  fullWidth,
  large,
  onClick,
  disabled,
  outline,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`disabled:opcaity-70 disabled:cursor-not-allowed rounded-full font-semibold hover:opacity-80 transition border-2 ${
        fullWidth ? "w-full" : "w-fit"
      } ${secondary ? "bg-white" : "bg-sky-500"}
       ${
         secondary
           ? "border-black"
           : "border-sky-500"
       }
       ${large ? "text-xl" : "text-md"}
       ${large ? "px-5" : "px-4"}
       ${large ? "py-3" : "py-2"}
       ${outline ? "bg-transparent" : ""}
       ${outline ? "border-white" : ""}
       ${outline ? "text-white" : ""}
   `}
    >
      {label}
    </button>
  );
};

export default Button;
