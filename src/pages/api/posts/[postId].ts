import { type NextApiRequest, type NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const getdetail = async (req: NextApiRequest, res: NextApiResponse) => {
  const {postId} = req.query
  const examples = await prisma.post.findFirst({where:{id: postId}});
  res.json(examples)
};

export default getdetail;
