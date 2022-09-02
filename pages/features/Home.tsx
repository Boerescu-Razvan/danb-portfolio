import Image from 'next/image'

const Home= (): JSX.Element => {
  return (
    <section className="bg-slate-400  min-h-screen">
      <div className="w-full h-screen relative bg-stone-600">
        <Image
          src={"/Home/Home1.jpg"}
          alt="Home image 1"
          height="1080px"
          layout="fill"
          objectFit="cover" 
          priority
        />
      </div>
    </section>
  )
}

export default Home
