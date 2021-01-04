import Head from 'next/head'
import Link from 'next/link'
import { FC } from 'react'
import styled from 'styled-components'

import packageJson from '../package.json'

const Title = styled.h1`
  font-size: 50px;
  color: red;
`

const Home: FC = () => (
  <div>
    <Head>
      <title>{packageJson.name}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Title className="title">
        <Link href="/posts">read this page</Link>
      </Title>
    </main>
  </div>
)

export default Home
