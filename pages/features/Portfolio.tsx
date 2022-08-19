import type { NextPage } from 'next'
import Image from 'next/image'

const Sidebar: NextPage = () => {
  return (
    <section className="bg-slate-300 min-h-screen">
      <h1 className="text-6xl font-bold">
        Lorem ipsum dolor sit amet
      </h1>
      <div className="w-full h-full bg-stone-600">
        <Image
          src={"/Home/Home1.jpg"}
          alt="Picture of the author"
          width="640px"
          height="480px"
        />
      </div>
    </section>
  )
}

export default Sidebar
