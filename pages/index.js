import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="mx-auto container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='prose'>
        <Header title="Welcome to my app!" />
        <p>
          Get started by editing <code>pages/index.js</code>
        </p>


        <div className="m-2">

          <Link className='font-medium text-blue-600 dark:text-blue-500 hover:underline' href="/testing">Goto Testing</Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
