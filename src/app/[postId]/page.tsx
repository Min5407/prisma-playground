import Prisma from "@/lib/prisma/db";
import { redirect } from "next/navigation";

const PostDetailPage = async ({ params }: { params: { postId: string } }) => {
  const post = await Prisma.post.findUnique({
    where: {
      id: params.postId,
    },
  });

  if (!post) redirect("/");

  return (
    <div>
      <h1 className="text-3xl font-bold">{post?.title}</h1>

      <p className="my-5 font-semibold">{post?.content}</p>

      <span className="block mb-1 text-slate-600">
        Created: {post?.createdAt.toDateString()}
      </span>
      <span className="block text-slate-600">
        Updated: {post?.updatedAt.toDateString()}
      </span>
    </div>
  );
};

export default PostDetailPage;
