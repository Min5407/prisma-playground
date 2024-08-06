import Prisma from "@/lib/prisma/db";
import Link from "next/link";

export default async function Home() {
  // const postData = await Prisma.post.findMany({
  //   where: {
  //     createdAt: {
  //       gt: new Date("2024-07-31"),
  //     },
  //   },
  //   select: {
  //     title: true,
  //     createdAt: true,
  //     id: true,
  //   },
  // });

  // const postCount = await Prisma.post.count();

  // const [query1, query2] = await Promise.all([
  //   Prisma.post.findMany(),
  //   Prisma.post.count(),
  // ]);

  // const userPost = await Prisma.user.findUnique({
  //   where: {
  //     email: "test@test.com",
  //   },
  //   include: {
  //     post: true,
  //   },
  // });

  const post = await Prisma.post.findMany({
    where: {
      author: {
        email: "test@test.com",
      },
    },
  });

  return (
    <>
      <h1 className="text-3xl font-bold">Post List Page {post.length}</h1>

      <Link
        href="/create"
        className="mt-5 inline-block px-3 py-2 bg-blue-500 text-white rounded"
      >
        Create
      </Link>

      <ul className="flex flex-col gap-3 my-10">
        {post.map(({ createdAt, id, title }) => (
          <Link href={`/${id}`} key={id}>
            <li className="flex gap-3 flex-col">
              <span>{title}</span>
              <span>{createdAt.toDateString()}</span>
              <span>{createdAt.toISOString()}</span>
              <span>{createdAt.toLocaleDateString()}</span>
              <span>{createdAt.toLocaleDateString()}</span>
              <span>{createdAt.toUTCString()}</span>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}
