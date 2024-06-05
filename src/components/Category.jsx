
const Category = () => {
  return (
    <div className=''>
        <h1 className='lg:text-3xl text-2xl font-semibold my-2 md:my-0'>Category</h1>
        <div className='mb-8 lg:mb-24 '>
            <div className='md:text-lg flex justify-between items-center font-semibold py-2 text-[#1C1C1C]'>
                <p>LifeStyle</p>
                <p>09</p>
            </div>
            <div className='md:text-lg flex justify-between items-center font-semibold py-2 text-[#1C1C1C]'>
                <p>Travel</p>
                <p>05</p>
            </div>
            <div className='md:text-lg flex justify-between items-center font-semibold py-2 text-[#1C1C1C]'>
                <p>Food</p>
                <p>09</p>
            </div>
            <div className='md:text-lg flex justify-between items-center font-semibold py-2 text-[#1C1C1C]'>
                <p>Healthcare</p>
                <p>10</p>
            </div>
            <div className='md:text-lg flex justify-between items-center font-semibold py-2 text-[#1C1C1C]'>
                <p>Technology</p>
                <p>03</p>
            </div>
     
          
        </div>



        <h1 className='lg:text-3xl text-2xl font-semibold my-2 md:my-0'>Search</h1>
        <div className='text-black flex gap-2 flex-wrap lg:w-[80%] lg:py-6'>
            <div className='font-normal w-fit md:px-3 px-2 md:text-lg border-2 rounded-md'>
                <span>Travel</span>
            </div>
            <div className='font-normal w-fit md:px-3 px-2 md:text-lg border-2 rounded-md'>
                <span>Lifestyle</span>
            </div>
            <div className='font-normal w-fit md:px-3 px-2 md:text-lg border-2 rounded-md'>
                <span>Fashion</span>
            </div>
            <div className='font-normal bg-zinc-800 text-white w-fit md:px-3 px-2 md:text-lg border-2 rounded-md'>
                <span>Technology</span>
            </div>
            <div className='font-normal w-fit md:px-3 px-2 md:text-lg border-2 rounded-md'>
                <span>Business</span>
            </div>
            <div className='font-normal w-fit md:px-3 px-2 md:text-lg border-2 rounded-md'>
                <span>Design</span>
            </div>
            <div className='font-normal w-fit md:px-3 px-2 md:text-lg border-2 rounded-md'>
                <span>Health</span>
            </div>
            <div className='font-normal w-fit md:px-3 px-2 md:text-lg border-2 rounded-md'>
                <span>Food</span>
            </div>
            <div className='font-normal w-fit md:px-3 px-2 md:text-lg border-2 rounded-md'>
                <span>Art</span>
            </div>
     
          
        </div>
    </div>
  )
}

export default Category