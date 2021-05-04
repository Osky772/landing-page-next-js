import Head from 'next/head'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Albums from '../components/Albums'
import type { AlbumsResult, ResultsEntity }  from '../components/Albums'
import Footer from '../components/Footer'

type HomeProps = {
  albums: {
    total: number;
    results: ResultsEntity[]
  } | null
}

export default function Home({ albums }: HomeProps) {
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
        <Albums albums={albums} />
      </main>
      <Footer />
    </>
  )
}

const getAlbums = async (): Promise<AlbumsResult | null> => {
  let result: AlbumsResult | null = null;

  try {
    const res = await fetch('https://itunes.apple.com/search?term=arctic+monkeys&entity=album&attribute=albumTerm&limit=7')
    result = await res.json()
  } catch (e) {
    console.error(e)
  }

  return result
}

export async function getStaticProps() {
  const result = await getAlbums();

  if (!result || !result.resultCount || !result.results) {
    return {
      props: {}
    }
  }

  return {
    props: {
      albums: {
        total: result.resultCount,
        results: result.results
      }
    },
  }
}
