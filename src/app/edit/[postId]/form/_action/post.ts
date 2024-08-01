"use server";

import Prisma from "@/lib/prisma/db";
import { redirect } from "next/navigation";

export const updatePostAction = async ({
  content,
  id,
  title,
}: {
  id: string;
  title: string;
  content: string;
}) => {
  const post = await Prisma.post.update({
    where: {
      id,
    },
    data: {
      content,
      title,
    },
  });

  redirect("/");
};
export const upsertPostAction = async (
  id: string,
  title: string,
  content: string
) => {
  const post = await Prisma.post.upsert({
    where: {
      id,
    },
    update: {
      title,
      content,
    },

    create: {
      title,
      content,
    },
  });

  redirect("/");
};
