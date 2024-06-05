import Navbar from './Navbar'

const HeroSection = () => {
  
  return (
    <>
      <div className='w-full max-h-[550px] md:h-[550px] h-[350px] bgOwn flex flex-col justify-between relative'>
          <Navbar />
          <h1 className='py-4 px-10 font-bold uppercase text-white md:text-6xl text-3xl bgHeadingColor '>Industry Insider</h1>
          <h1 className='py-4 px-10 font-semibold uppercase text-white md:text-lg bgHeadingColor relative '>Home / Industry Insider</h1>
      </div>
      <img className='b absolute bottom-40 right-16 mix-blend-color w-[40%] hidden xl:block' src="/public/arrow.png" alt="" />
    </>
  )
}

export default HeroSection