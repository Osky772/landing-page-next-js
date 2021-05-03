import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Muse.ic - your music</title>
        <meta name="description" content="Muse.ic - listen to music" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Muse.ic
        </h1>
      </main>
    </div>
  )
}
