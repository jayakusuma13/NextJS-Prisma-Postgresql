import { type NextApiRequest, type NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const getdata = async (req: NextApiRequest, res: NextApiResponse) => {
  const examples = await prisma.post.findMany();
  res.json(examples)
};

export default getdata;
