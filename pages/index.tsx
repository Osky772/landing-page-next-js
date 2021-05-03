import Head from 'next/head'
import Image from 'next/image'
import Wrapper from '../components/Wrapper';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Muse.ic - your music</title>
        <meta name="description" content="Muse.ic - listen to music" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <Header />
      </Wrapper>
    </>
  )
}
