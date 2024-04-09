import { addPost, deletePost } from "@/lib/action";

const Page = () => {
  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="desc" name="desc" />
        <input type="text" placeholder="slug" name="slug" />
        <input type="text" placeholder="userId" name="userId" />
        <button>create</button>
      </form>
      <form action={deletePost}>
        <input type="text" placeholder="id" name="id" />
        <button>delete</button>
      </form>
    </div>
  );
};

export default Page;
