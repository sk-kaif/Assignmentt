import { MdOutlineDateRange } from 'react-icons/md';

const Cart = ({dateSize, despText, ownGap,limitedData }) => {  
  return (
   <div className={`cartBg demoBg w-full h-full flex flex-col ${ownGap} justify-end text-white p-4 rounded-md`}>
        <div className={`rounded-md lg:text-xl w-fit bg-[#313D47] p-2`}>
            <p>Techonology</p>
        </div>
        <h1 className={` md:${despText}  `}>set video playback speed with javascript</h1>
        {/* <h1 className={` md:${despText}  `}>{id}</h1> */}
        <div className="flex items-center gap-3">
            <MdOutlineDateRange />
            <p className={`lg:${dateSize} text-sm`}>02 december 2022</p>
        </div>
    </div>
    
  )
}
export default Cart

