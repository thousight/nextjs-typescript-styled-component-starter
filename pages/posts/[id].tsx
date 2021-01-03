import Link from "next/link";
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <h1>Post id: {id}</h1>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </>
  );
}

export default Post;
