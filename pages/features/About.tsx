
const About = (): JSX.Element => {
  return (
    <section  className="bg-red-100  h-fit">
      <h1 className="text-6xl font-bold">
        About me
      </h1>
      <div className="mt-6 flex flex-wrap items-center justify-around sm:w-full">
        <span
          className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
        >
          <h3 className="text-2xl font-bold">Blender</h3>
          <p className="mt-4 text-xl">
            Sunt bun la asta
          </p>
        </span>
        <span
          className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
        >
          <h3 className="text-2xl font-bold">Photoshop</h3>
          <p className="mt-4 text-xl">
            Am si competenta asta
          </p>
        </span>
        <span
          className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
        >
          <h3 className="text-2xl font-bold">Color theory</h3>
          <p className="mt-4 text-xl">
            Ma pricep la lucrul acesta
          </p>
        </span>

        <span
          className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
        >
          <h3 className="text-2xl font-bold">SketchUP</h3>
          <p className="mt-4 text-xl">
            Pot sa lucrez si cu dinasta
          </p>
        </span>
      </div>
    </section>
  )
}

export default About
