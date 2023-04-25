import React from "react";
import { IconType } from "react-icons";

interface ISidebarItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
}

const SidebarItem: React.FC<ISidebarItemProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
}) => {
  return (
    <div className="flex flex-row items-center">
      <div
        className="relative 
        rounded-full 
        h-14
        w-14
        flex
        items-center
        justify-center 
        p-4
        hover:bg-slate-300 
        hover:bg-opacity-10 
        hover:text-sky-blue 
        cursor-pointer 
        lg:hidden
    "
      >
        <Icon />
      </div>
      <div className="relative hidden lg:flex items-center gap-4 p-4 rounded-full hove:bg-slate-300 hover:bg-opacity-10 cursor-pointer">
        <Icon />
        <h3 className="lg:block text-white text-xl" aria-label={label}>
          {label}
        </h3>
      </div>
    </div>
  );
};

export default SidebarItem;
