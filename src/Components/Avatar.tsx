import useUser from "@src/hooks/useUser";
import * as React from "react";

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
  const { data: fetchedUser } = useUser(userId);
  return <div></div>;
};

export default Avatar;
