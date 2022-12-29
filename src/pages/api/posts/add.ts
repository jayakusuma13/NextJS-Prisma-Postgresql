import { type NextApiRequest, type NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";
import { redirect } from "next/dist/server/api-utils";
import Router from "next/router";

const prisma = new PrismaClient()

const add = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body
  const examples = await prisma.post.create({
    data:{
      title:body.title,
      body:body.body
    }});
  res.json(examples)

};

export default add;
