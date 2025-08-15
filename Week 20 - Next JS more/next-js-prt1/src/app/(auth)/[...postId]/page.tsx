export default async function BlogPage({
  params,
}: {
  params: { postId: number };
}) {
  const postId = (await params).postId;

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <h1>Post {JSON.stringify(postId)}</h1>
      </div>
    </>
  );
}
