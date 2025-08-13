import axios from "axios";

export default async function BlogPage({
  params,
}: {
  params: { postId: number };
}) {
  const postId = (await params).postId;
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <h1>Post {postId}</h1>
        <div className="w-md flex flex-col justify-center items-start p-4 bg-slate-800 rounded-lg border-1 border-slate-600">
          <div className="mb-4 flex items-center gap-2"></div>
          <h1 className="text-4xl text-white">{data.title}</h1>
          <p className="text-xl text-white">{data.body}</p>
        </div>
      </div>
    </>
  );
}
