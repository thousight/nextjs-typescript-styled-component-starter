import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

const Post: FC = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <h1>Post id: {id}</h1>
      <Link href="/">Back to home</Link>
    </>
  )
}

export default Post
