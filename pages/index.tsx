import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  color: red;
`;

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title className="title">
          <Link href="/posts">
            read this page
          </Link>
        </Title>
      </main>
    </div>
  );
};

export default Home;
