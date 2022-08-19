import type { NextPage } from 'next'
import Home from '../features/Home'
import Portfolio from '../features/Portfolio'
import About from '../features/About'
import Contact from '../features/Contact'

const Main: NextPage = () => {
  return (
    <main className="flex min-h-full w-full flex-auto flex-col items-stretch justify-center text-center bg-lime-500 mt-20 md:mt-0 md:ml-44" id="main-content">
      <Home />
      <Portfolio />
      <About />
      <Contact />
    </main>
  )
}

export default Main
