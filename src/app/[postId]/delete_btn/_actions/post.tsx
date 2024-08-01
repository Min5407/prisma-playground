"use server";
import Prisma from "@/lib/prisma/db";
import { redirect } from "next/navigation";

export const deletePostAction = async (id: string) => {
  await Prisma.post.delete({
    where: {
      id,
    },
  });

  redirect("/");
};
