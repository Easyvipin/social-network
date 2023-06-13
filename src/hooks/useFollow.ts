import useSwr from "swr";
import fetcher from "@libs/fetcher";
import useCurrentUser from "./useCurrentUser";
import useUser from "./useUser";
import useLoginModal from "./useLoginModal";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

const useFollow = (userId: string) => {
  const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
  const { mutate: mutatetFetchedUser } = useUser(userId);

  const loginModal = useLoginModal();

  const isFollowing = useMemo(() => {
    const list = currentUser?.followingIds || [];
    console.log(list.includes(userId));
    return list.includes(userId);
  }, [userId, currentUser?.followingIds]);

  const toggleFollow = useCallback(async () => {
    if (!currentUser) {
      loginModal.onOpen();
    }

    try {
      let request;
      if (isFollowing) {
        request = () => axios.patch("/api/follow", { userId });
      } else {
        request = () => axios.post("/api/follow", { userId });
      }
      await request();

      mutateCurrentUser();
      mutatetFetchedUser();
    } catch (error) {
      toast.error("Something went wrong");
    }
  }, [
    currentUser,
    isFollowing,
    userId,
    mutateCurrentUser,
    mutatetFetchedUser,
    loginModal,
  ]);

  return {
    isFollowing,
    toggleFollow,
  };
};

export default useFollow;
