import Link from 'next/link'
import { FC } from 'react'

const Posts: FC = () => (
  <>
    <h1>Posts</h1>
    <Link href="/posts/meh">Go to meh</Link>
    <Link href="/">Back to home</Link>
  </>
)

export default Posts
