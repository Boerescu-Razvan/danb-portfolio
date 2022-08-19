import type { NextPage } from 'next'

const Sidebar: NextPage = () => {
  return (
    <nav className="bg-yellow-500 md:hidden">
      <ul className='bg-blue-300 flex flex-row space-x-12 justify-center items-center'>
        <li className='bg-red-200 font-sans text-3xl'>
          <span className=''>Home</span>
        </li>
        <li className='bg-purple-200 font-sans text-3xl'>
          <span>Portfolio</span>
        </li>
        <li className='bg-orange-200 font-sans text-3xl'>
          <span>About</span>
        </li>
        <li className='bg-yellow-200 font-sans text-3xl'>
          <span>Contact</span>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
