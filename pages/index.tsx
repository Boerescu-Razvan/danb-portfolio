import type { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from './layout/Sidebar'
import Topnav from './layout/Topnav'
import Main from './layout/Main'

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Daniel Boisteanu 3D Designer</title>
        <link rel="icon" href="/fav.ico" />
      </Head>
      <div className="flex min-h-screen flex-col items-stretch md:flex-row">
        <Topnav />
        <Sidebar />
        <Main />
      </div>
    </>
  )
}

export default Home
