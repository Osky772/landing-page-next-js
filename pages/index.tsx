import Head from 'next/head'
import Image from 'next/image'
import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
import Hero from '../components/Hero';

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
        <main>
          <Hero />
        </main>
      </Wrapper>
    </>
  )
}
