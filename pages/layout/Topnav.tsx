import type { NextPage } from 'next'

const Topnav: NextPage = () => {
  return (
    <nav className="bg-emerald-300 fixed z-10 w-full md:hidden">
      <ul className='flex h-20 w-full flex-row space-x-12 justify-center items-center'>
      <li className='font-sans text-3xl'>
          <a href="#Home">
            <span className=''>Home</span>
          </a>
        </li>
        <li className='font-sans text-3xl'>
          <a href="#Portfolio">
            <span>Portfolio</span>
          </a>
        </li>
        <li className='font-sans text-3xl'>
          <a href="#About">
            <span>About</span>
          </a>
        </li>
        <li className='font-sans text-3xl'>
          <a href="#Contact">
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Topnav
