import type { NextPage } from 'next'

const Sidebar: NextPage = () => {
  return (
    <section className="bg-teal-100  min-h-screen">
      <h1 className="text-6xl font-bold">
        CONTACT
      </h1>
      <div className="px-2 flex flex-col justify-center items-center" >
        < form className="py-20 flex-1 flex-col justify-center items-center" >
          < div className="h-1/2 w-full flex flex-col my-2" >
            < label htmlFor='name'>Name</label>
            < input type='text' name='name' className="h-5" />
          </div>  < div className="h-1/2 w-full flex flex-col my-2" >
            < label htmlFor='email'>Email</label>
            < input type='email' name='email' className="h-5" />
          </div>  < div className="h-1/2 w-full flex flex-col my-2" >
            < label htmlFor='message'>Message</label>
            < input type='text' name='message' className="h-5" />
          </div>  < input type='submit' />
        </form >
      </div>
    </section>
  )
}

export default Sidebar
