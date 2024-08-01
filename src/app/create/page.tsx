import Form from "./form";

const CreatePage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold">Create Post Page </h1>

      <Form>
        <div className="flex gap-2 items-center mb-5 ">
          <label htmlFor="title" className="min-w-16">
            Title
          </label>
          <input name="title" id="title" className="flex-1 p-2" />
        </div>
        <div className="flex gap-2 items-center mb-5">
          <label htmlFor="content" className="min-w-16">
            Content
          </label>
          <textarea
            name="content"
            id="content"
            className="flex-1 p-2 min-h-28"
          />
        </div>
        <button
          type="submit"
          className="block ml-auto border border-slate-400 rounded bg-blue-400 text-white px-3 py-2"
        >
          Create Post
        </button>
      </Form>
    </>
  );
};

export default CreatePage;
