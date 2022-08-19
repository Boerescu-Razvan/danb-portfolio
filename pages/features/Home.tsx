import type { NextPage } from 'next'
import Image from 'next/image'

const Sidebar: NextPage = () => {
  return (
    <section className="bg-slate-400  min-h-screen">
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
