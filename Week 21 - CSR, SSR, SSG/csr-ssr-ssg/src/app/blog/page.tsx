import Link from "next/link";

export default function Blog() {
  return (
    <>
      <div className="">
        <h1>This is Blogs Main Page</h1>
        <Link href={"/blog/1"}>Product 1</Link>
        <Link href={"/blog/2"}>Product 2</Link>
        <Link href={"/blog/3"}>Product 3</Link>
      </div>
    </>
  );
}
