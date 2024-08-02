"use server";

import Prisma from "@/lib/prisma/db";
import { redirect } from "next/navigation";

export const createPostAction = async (title: string, content: string) => {
  const post = await Prisma.post.create({
    data: {
      title,
      content,
      authorId: "clzci3qwq0000qo0q3ocgn37x",
    },
  });

  redirect("/");
};
