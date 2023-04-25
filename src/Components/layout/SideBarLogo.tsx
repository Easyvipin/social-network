import { useRouter } from "next/router";
import React from "react";
import { BsTwitter } from "react-icons/bs";

interface ISideBarLogoProps {}

const SideBarLogo: React.FC<ISideBarLogoProps> = (props) => {
  const router = useRouter();
  return (
    <div
      className="rounded-full h-14 w-14 p-4 flex "
      onClick={() => router.push("/")}
    >
      <BsTwitter size={28} color="white" />
    </div>
  );
};

export default SideBarLogo;
