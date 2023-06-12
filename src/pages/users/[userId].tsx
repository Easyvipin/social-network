import PostFeed from "@src/Components/Posts/PostFeed";
import Header from "@src/Components/layout/Header";
import UserBio from "@src/Components/users/UserBio";
import UserHero from "@src/Components/users/UserHero";
import useUser from "@src/hooks/useUser";
import { useRouter } from "next/router";
import React from "react";
import { ClipLoader } from "react-spinners";

interface IUserViewProps {}

const UserView: React.FunctionComponent<IUserViewProps> = (props) => {
  const router = useRouter();
  const { userId } = router.query;

  const { data: fetchedUser, isLoading } = useUser(userId as string);

  if (isLoading || !fetchedUser) {
    return (
      <div className="flex h-full items-center justify-center">
        <ClipLoader color="lightblue" size={60} />
      </div>
    );
  }

  return (
    <>
      <Header showBackArrow label={fetchedUser?.name} />
      <UserHero userId={userId as string} />
      <UserBio userId={userId as string} />
      <PostFeed userId={userId as string} />
    </>
  );
};

export default UserView;
