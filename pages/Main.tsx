import type { NextPage } from 'next'
import Home from './Home'
import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'

const Main: NextPage = () => {
  return (
    <main className="flex min-h-full w-full flex-1 flex-col items-center justify-center px-20 text-center bg-lime-500 md:ml-44" id="main-content">
      <Home />
      <Portfolio />
      <About />
      <Contact />
    </main>
  )
}

export default Main
