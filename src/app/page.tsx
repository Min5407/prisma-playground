import Prisma from "@/lib/prisma/db";
import Link from "next/link";

export default async function Home() {
  // const postData = await Prisma.post.findMany({
  // where: {
  //   createdAt: {
  //     gt: new Date("2024-07-31"),
  //   },
  // },
  // select: {
  //   title: true,
  //   createdAt: true,
  //   id: true,
  // },
  // });

  // const postCount = await Prisma.post.count();

  const [query1, query2] = await Promise.all([
    Prisma.post.findMany(),
    Prisma.post.count(),
  ]);

  return (
    <>
      <h1 className="text-3xl font-bold">Post List Page {query2}</h1>

      <button className="mt-5 inline-block px-3 py-2 bg-blue-500 text-white rounded">
        Create
      </button>

      <ul className="flex flex-col gap-3 my-10">
        {query1.map(({ createdAt, id, title }) => (
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
