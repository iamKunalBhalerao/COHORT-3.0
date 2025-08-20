import Link from "next/link";

export default async function Blogs({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const slugNum = Number(slug);

  const prevSlug = slugNum > 1 ? slugNum - 1 : 1;
  const nextSlug = slugNum < 3 ? slugNum + 1 : 3;

  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-4xl font-medium">
          Product Id: {slug}, get at {new Date().toLocaleTimeString()}
        </h1>
        <div className="flex gap-4 mt-4">
          <Link href={`/blog/${prevSlug}`}>
            <button className="text-2xl px-4 py-2 rounded-lg bg-slate-800 border-1 border-slate-500 cursor-pointer">
              Prev
            </button>
          </Link>
          <Link href={`/blog/${nextSlug}`}>
            <button className="text-2xl px-4 py-2 rounded-lg bg-slate-800 border-1 border-slate-500 cursor-pointer">
              Next
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
