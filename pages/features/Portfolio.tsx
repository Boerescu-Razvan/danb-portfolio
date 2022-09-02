import GalleryCard from '../components/GalleryCard'

const imageUrls = [
  "/Portfolio/Portfolio01.jpg",
  "/Portfolio/Portfolio02.jpg",
  "/Portfolio/Portfolio03.jpg",
  "/Portfolio/Portfolio04.jpg",
  "/Portfolio/Portfolio05.jpg",
  "/Portfolio/Portfolio06.jpg",
  "/Portfolio/Portfolio07.jpg",
  "/Portfolio/Portfolio08.jpg",
  "/Portfolio/Portfolio09.jpg",
  "/Portfolio/Portfolio10.jpg"
]

const Portfolio = (): JSX.Element => {
  return (
    <section className="bg-slate-300 min-h-screen">
      <h1 className="text-6xl font-bold">
        Portfolio
      </h1>
      <div className="w-full h-full grid grid-cols-2 gap-1 bg-stone-600">
        {imageUrls.map((url, index) => (
          <GalleryCard
            key={url}
            imageUrl={url}
            show={true}
          />
        ))}
      </div>
    </section>
  )
}

export default Portfolio
