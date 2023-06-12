import { useRouter } from "next/router";
import * as React from "react";
import useLoginModal from "@src/hooks/useLoginModal";
import useCurrentUser from "@src/hooks/useCurrentUser";
import { formatDistanceToNowStrict } from "date-fns";
import Avatar from "../Avatar";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";

interface IPostItemProps {
  data: Record<string, any>;
  userId?: string;
}

const PostItem: React.FunctionComponent<IPostItemProps> = ({
  data,
  userId,
}) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const { data: currentUser } = useCurrentUser();

  const goToUser = React.useCallback(
    (event: any) => {
      event.stopPropagation();
      router.push(`/users/${data.user.id}`);
    },
    [router, data.user.id]
  );

  const goToPost = React.useCallback(() => {
    router.push(`/posts/${data.id}`);
  }, [router, data.user.id]);

  const onLike = React.useCallback(
    (event: any) => {
      event.stopPropagation();
      loginModal.onOpen();
    },
    [loginModal]
  );
  const createdAt = React.useMemo(() => {
    if (!data?.createdAt) {
      return null;
    }
    return formatDistanceToNowStrict(new Date(data.createdAt));
  }, [data?.createdAt]);

  return (
    <div
      onClick={goToPost}
      className="cursor-pointer border-b-[1px] border-neutral-800 p-5 transition hover:bg-neutral-900"
    >
      <div className="item-start flex flex-row gap-3">
        <Avatar userId={data.user.id} />
        <div>
          <div className="flex flex-row items-center gap-2">
            <p
              onClick={goToUser}
              className="cursor-pointer font-semibold text-white hover:underline"
            >
              {data.user.name}
            </p>
            <span
              onClick={goToUser}
              className="hover:undeline hidden cursor-pointer text-neutral-500 md:block"
            >
              @{data.user.username}
            </span>
            <span className="text-sm text-neutral-500">{createdAt}</span>
          </div>
          <div className="mt-1 text-white">{data.body}</div>
          <div className="mt-3 flex flex-row items-center gap-10">
            <div className="flex cursor-pointer flex-row items-center gap-2 text-neutral-500 transition hover:text-sky-500">
              <AiOutlineMessage size={20} />
              <p>{data.comments?.length || 0}</p>
            </div>
            <div
              onClick={onLike}
              className="flex cursor-pointer flex-row items-center gap-2 text-neutral-500 transition hover:text-red-500"
            >
              <AiOutlineHeart size={20} />
              <p>{data.likes?.length || 0}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
