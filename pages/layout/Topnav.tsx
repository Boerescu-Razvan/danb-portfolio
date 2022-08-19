import type { NextPage } from 'next'

const Sidebar: NextPage = () => {
  return (
    <nav className="bg-emerald-300 fixed z-10 w-full md:hidden">
      <ul className='flex h-20 w-full flex-row space-x-12 justify-center items-center'>
        <li className='font-sans text-3xl'>
          <span className=''>Home</span>
        </li>
        <li className='font-sans text-3xl'>
          <span>Portfolio</span>
        </li>
        <li className='font-sans text-3xl'>
          <span>About</span>
        </li>
        <li className='font-sans text-3xl'>
          <span>Contact</span>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
