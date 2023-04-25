import { useRouter } from "next/router";
import React from "react";
import { FaFeather } from "react-icons/fa";

interface ISidebarTweetBtnProps {}

const SidebarTweetBtn: React.FC<ISidebarTweetBtnProps> = (props) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push("/")}>
      <div className="mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center bg-sky-500 hover:bg-opacity-80 transition cursor-pointer">
        <FaFeather size={24} color="white" />
      </div>
      <div
        className="
       mt-6 hidden lg:block px-4 py-2 rounded-full bg-sky-500 hover:bg-opacity-90 cursor-pointer transition
      "
      >
        <h3 className="hidden lg:block text-center font-semibold text-white text-[20px]">
          tweet
        </h3>
      </div>
    </div>
  );
};

export default SidebarTweetBtn;
