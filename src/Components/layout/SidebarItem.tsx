import useCurrentUser from "@src/hooks/useCurrentUser";
import useLoginModal from "@src/hooks/useLoginModal";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { IconType } from "react-icons";

interface ISidebarItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
  auth?: boolean;
}

const SidebarItem: React.FC<ISidebarItemProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
  auth,
}) => {
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrentUser();
  const router = useRouter();
  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick();
    }
    if (auth && !currentUser) {
      loginModal.onOpen();
    } else if (href) {
      router.push(href);
    }
  }, [router, onClick, href, currentUser, auth, loginModal]);
  return (
    <div onClick={handleClick} className="flex flex-row items-center">
      <div
        className="hover:text-sky-blue 
        relative 
        flex
        h-14
        w-14
        cursor-pointer
        items-center 
        justify-center
        rounded-full 
        p-4 
        hover:bg-slate-300 
        hover:bg-opacity-10 
        lg:hidden
    "
      >
        <Icon />
      </div>
      <div className="hove:bg-slate-300 relative hidden cursor-pointer items-center gap-4 rounded-full p-4 hover:bg-opacity-10 lg:flex">
        <Icon />
        <h3 className="text-xl text-white lg:block" aria-label={label}>
          {label}
        </h3>
      </div>
    </div>
  );
};

export default SidebarItem;
