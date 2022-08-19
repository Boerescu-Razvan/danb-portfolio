import type { NextPage } from 'next'

const Sidebar: NextPage = () => {
  return (
    <nav className="bg-emerald-300 w-44 hidden flex-col justify-center fixed min-h-screen md:flex">
      <ul className='flex flex-col space-y-6 align-middle items-center justify-center'>
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
