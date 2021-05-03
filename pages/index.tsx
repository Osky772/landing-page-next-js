import Head from 'next/head'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Muse.ic - your music</title>
        <meta name="description" content="Muse.ic - listen to music" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
          <Hero />
        </main>
      <Footer />
    </>
  )
}
