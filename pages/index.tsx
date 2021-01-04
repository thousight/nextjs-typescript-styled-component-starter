import Head from 'next/head'
import { FC } from 'react'
import styled from 'styled-components'

import packageJson from '../package.json'

const Title = styled.p`
  color: #333333;
`

const Home: FC = () => (
  <>
    <Head>
      <title>{packageJson.name}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Title>
        {packageJson.name} at version {packageJson.version}
      </Title>
    </main>
  </>
)

export default Home
