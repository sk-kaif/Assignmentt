import { MdOutlineDateRange } from 'react-icons/md'

const FeatureCart = () => {
  return (
    <>
        <div className='w-[100%] h-[230px]  demoBg flex flex-col justify-end p-3'>
            <p className='bg-cyan-950 w-fit px-2  py-1 text-white rounded-md'>technology</p>
        </div>
        <div className='flex flex-col gap-2'>
            <h1>set video playback speed with javascript</h1>
            <div className="flex items-center gap-3">
              <MdOutlineDateRange />
              <p className={` text-sm`}>02 december 2022</p>
            </div>
            <div className="info">
                <p>Did you come here for something in particular or just general Riker-bashing? And blowing into</p>
            </div>
        </div>
    </>
  )
}

export default FeatureCart