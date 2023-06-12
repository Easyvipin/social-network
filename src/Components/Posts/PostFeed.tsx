import usePosts from "@src/hooks/usePosts";
import * as React from "react";
import PostItem from "./PostItem";

interface IPostFeedProps {
  userId?: string;
}

const PostFeed: React.FunctionComponent<IPostFeedProps> = ({ userId }) => {
  const { data: posts = [] } = usePosts(userId);
  return (
    <>
      {posts.map((post: Record<string, any>) => (
        <PostItem userId={userId} key={post.id} data={post} />
      ))}
    </>
  );
};

export default PostFeed;
