import Prisma from "@/lib/prisma/db";
import Link from "next/link";

export default async function Home() {
  const postData = await Prisma.post.findMany();

  return (
    <>
      <h1 className="text-3xl font-bold">Post List Page</h1>

      <ul className="flex flex-col gap-3 my-10">
        {postData.map(({ createdAt, id, title }) => (
          <Link href={`/${id}`} key={id}>
            <li className="flex gap-3">
              <span>{title}</span>
              <span>{createdAt.toDateString()}</span>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}
