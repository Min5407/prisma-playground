"use client";

import { FormEvent, ReactNode } from "react";
import { updatePostAction } from "./_action/post";
import { useParams } from "next/navigation";

type Props = {
  children: ReactNode;
};
const Form = ({ children }: Props) => {
  const { postId } = useParams();
  const handleCreatePost = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = String(formData.get("title"));
    const content = String(formData.get("content"));

    await updatePostAction({ id: String(postId), title, content });
  };
  return (
    <form className="my-5 w-[800px]" onSubmit={handleCreatePost}>
      {children}
    </form>
  );
};

export default Form;
