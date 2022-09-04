import type { NextPage } from 'next'

const Sidebar: NextPage = () => {
  return (
    <nav className="bg-emerald-300 w-44 hidden flex-col justify-center fixed min-h-screen md:flex">
      <ul className='flex flex-col space-y-6 align-middle items-center justify-center'>
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

export default Sidebar
