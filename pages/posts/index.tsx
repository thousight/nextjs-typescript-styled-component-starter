import Link from "next/link";

const Posts = () => (
  <>
    <h1>Posts</h1>
    <Link href="/posts/meh">
      <a>Go to meh</a>
    </Link>
    <Link href="/">
      <a>Back to home</a>
    </Link>
  </>
);

export default Posts;
