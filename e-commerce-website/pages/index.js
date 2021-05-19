import Head from 'next/head';
import styled from 'styled-components';

const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #4d0000;
`;

const Heading = styled.h1`
  color: #fff;
  font-size: 10rem;
  font-weight: 650;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>HOME</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero>
        <Heading> WELCOME </Heading>
      </Hero>
    </>
  );
}