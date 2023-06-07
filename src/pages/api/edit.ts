import serverAuth from "@libs/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "PATCH") {
    return res.status(405).end();
  }
  try {
    const { currentUser } = await serverAuth(req, res);
    currentUser;

    const { name, username, bio, profileImage, coverImage } = req.body;

    if (!name || !username) {
      throw new Error("Missing field");
    }

    const updateUser = await prisma?.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        name,
        username,
        bio,
        profileImage,
        coverImage,
      },
    });

    return res.status(200).json({ updateUser });
  } catch (error) {
    error;
    return res.status(400).end();
  }
}
