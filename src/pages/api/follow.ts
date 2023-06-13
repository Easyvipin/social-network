import serverAuth from "@libs/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST" && req.method !== "PATCH") {
    return res.status(405).end();
  }
  try {
    const { userId } = req.body;

    const { currentUser } = await serverAuth(req, res);

    if (!userId || typeof userId !== "string") {
      throw new Error("Invalid ID");
    }

    const user = await prisma?.user.findUnique({
      where: {
        id: currentUser.id,
      },
    });
    if (!user) {
      throw new Error("Invalid ID");
    }

    console.log(user.followingIds);

    let updatedFollowingIds = [...(user.followingIds || [])];

    if (req.method === "POST") {
      updatedFollowingIds.push(userId);
    }

    if (req.method === "PATCH") {
      updatedFollowingIds = updatedFollowingIds.filter(
        (followingIds) => followingIds !== userId
      );

      console.log(updatedFollowingIds);
    }

    const updatedUser = await prisma?.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        followingIds: updatedFollowingIds,
      },
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    error;

    return res.status(400).end();
  }
}
