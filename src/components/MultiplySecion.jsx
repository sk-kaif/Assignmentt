import { MdOutlineDateRange } from "react-icons/md";
import { FaArrowRightLong , FaArrowLeftLong} from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

import Category from "./Category";
import { MyContext } from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";

const MultiplySecion = () => {
    const { data } = useContext(MyContext);
    const limitedData = data.slice(0, 4);
  return (
    <>

        <div className="lg:flex justify-between w-[90%] mx-auto my-5">


            <div className="lg:w-[65%]">
            <h1 className="lg:text-3xl text-2xl font-semibold my-2">Featured  This month</h1>
                <div className="parent lg:w-[100%] justify-between md:flex flex-wrap gap-1 lg:gap-2 ">   
                {limitedData.map((item) => (
                    <Link to={`/cart/${item.id}`} className="my-5 lg:my-0 md:w-[48%] w-full h-96 md:h-[450px] md:pb-6" key={item.id}>
                    <div className={`bg-cover bg-center md:h-[60%] h-[200px] rounded-md`} style={{backgroundImage: `url(${item.acf.blog_image})`}}></div>
                    <div className="mt-5 p-2 h-[40%] text-sm">
                        <h2 className="text-base md:text-xl my-1 font-semibold">{item.title}</h2>
                        <div className="flex items-center my-2 justify-between w-fit gap-2">
                        <MdOutlineDateRange />
                        <span>{item.acf.blog_publish_date}</span>
                        </div>
                        <p className="">
                        {item.acf.meta_description.substring(0, 97)}...
                        </p>
                    </div>
                    </Link>
                ))}                 
                </div>
                
            </div>


            <div className="category lg:w-[33%]">
                <Category />
            </div>
        </div>



        {/* Pagenation */}
        <div className="page  w-[90%] mx-auto flex items-center justify-center md:my-16 my-11">
            <div className="flex md:gap-4 gap-2">
                
                <div className="cursor-pointer border-2 rounded-sm md:px-4 px-2 md:text-lg flex items-center gap-2">
                    <FaArrowLeftLong />
                    <p>Prev</p>
                </div>
                <div className="cursor-pointer border-2 rounded-sm md:px-4 px-2 md:text-lg c">1</div>
                <div className="cursor-pointer border-2 rounded-sm md:px-4 px-2 md:text-lg c">2</div>
                <div className="cursor-pointer border-2 rounded-sm md:px-4 px-2 md:text-lg c">3</div>
                <div className="cursor-pointer border-2 rounded-sm md:px-4 px-2 md:text-lg flex items-center gap-2 bg-[#666666] text-white">
                    <p>Next</p>
                    <FaArrowRightLong  className=" font-light"/>
                </div>





            </div>
        </div>



        {/* Ribbon */}
        <div className="bg-[#313D47] text-white mt-6">


            <div className="w-[90%] mx-auto p-8 md:flex items-center justify-between">
                <div className="flex gap-3 items-end md:w-[50%] py-3 md:py-0 ">
                    <h1 className="lg:text-xl xl:text-3xl text-base uppercase font-semibold">Let’s co-create the right <br /> solution for your business</h1>
                    <GoArrowUpRight className="text-4xl"/>
                </div>
                <div className="icon bg-[#DDDDDD] text-black p-3 rounded-3xl cursor-pointer text-center mt-3 md:mt-0">
                    <h1 className="uppercase font-semibold">enquire now</h1>
                </div>
            </div>




        </div>

    </>
  )
}

export default MultiplySecion





// // <div className="my-5 lg:my-0 md:w-[48%]  w-full h-96 md:h-[450px] md:pb-6">

// <div className="demoBg md:h-[60%] h-[50%] rounded-md">
// </div>
// <div className="mt-5 p-2 h-[40%] text-sm">
//     <h2 className="text-base md:text-xl my-1 font-semibold">set video playback speed with javascript</h2>
//     <div className="flex items-center my-2 justify-between w-fit gap-2">
//         <MdOutlineDateRange />
//         <span>02 december 2022</span>
//     </div>
//     <p className="">Did you come here for something in particular or just general Riker-bashing? And blowing into</p>
// </div>

// </div>
// <div className="my-5 lg:my-0 md:w-[48%]  w-full h-96 md:h-[450px] md:pb-6">

// <div className="demoBg md:h-[60%] h-[50%] rounded-md">
// </div>
// <div className="mt-5 p-2 h-[40%] text-sm">
//     <h2 className="text-base md:text-xl my-1 font-semibold">set video playback speed with javascript</h2>
//     <div className="flex items-center my-2 justify-between w-fit gap-2">
//         <MdOutlineDateRange />
//         <span>02 december 2022</span>
//     </div>
//     <p className="">Did you come here for something in particular or just general Riker-bashing? And blowing into</p>
// </div>

// </div>
// <div className="my-5 lg:my-0 md:w-[48%]  w-full h-96 md:h-[450px] md:pb-6">

// <div className="demoBg md:h-[60%] h-[50%] rounded-md">
// </div>
// <div className="mt-5 p-2 h-[40%] text-sm">
//     <h2 className="text-base md:text-xl my-1 font-semibold">set video playback speed with javascript</h2>
//     <div className="flex items-center my-2 justify-between w-fit gap-2">
//         <MdOutlineDateRange />
//         <span>02 december 2022</span>
//     </div>
//     <p className="">Did you come here for something in particular or just general Riker-bashing? And blowing into</p>
// </div>

// </div>