"use client";

import { FormEvent, ReactNode } from "react";
import { createPostAction } from "../_action/post";

type Props = {
  children: ReactNode;
};
const Form = ({ children }: Props) => {
  const handleCreatePost = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = String(formData.get("title"));
    const content = String(formData.get("content"));

    await createPostAction(title, content);
  };
  return (
    <form className="my-5 w-[800px]" onSubmit={handleCreatePost}>
      {children}
    </form>
  );
};

export default Form;
