"use client";

import { useParams } from "next/navigation";
import { deletePostAction } from "./_actions/post";

const DeleteBtn = () => {
  const { postId } = useParams();

  return (
    <button onClick={() => deletePostAction(String(postId))}>
      Delete Post
    </button>
  );
};

export default DeleteBtn;
