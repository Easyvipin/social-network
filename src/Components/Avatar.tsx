import useUser from "@src/hooks/useUser";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback } from "react";

interface AvatarProps {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
}

const Avatar: React.FunctionComponent<AvatarProps> = ({
  userId,
  isLarge,
  hasBorder,
}) => {
  const router = useRouter();
  const { data: fetchedUser } = useUser(userId);

  const onClick = useCallback(
    (event: any) => {
      event?.stopPropagation();

      const url = `/users/${userId}`;

      router.push(url);
    },
    [router, userId]
  );

  return (
    <div
      className={`${hasBorder ? "border-green border-4" : ""} ${
        isLarge ? "h-32 w-32" : "h-12 w-12"
      } relative cursor-pointer rounded-full transition hover:opacity-90
  `}
    >
      <Image
        fill
        style={{
          objectFit: "cover",
          borderRadius: "100%",
        }}
        alt="Avatar"
        onClick={onClick}
        src={fetchedUser?.profileImage || "/images/user-image-placeholder.png"}
      />
    </div>
  );
};

export default Avatar;
