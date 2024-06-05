import { CiSearch } from 'react-icons/ci'
import { RxHamburgerMenu } from "react-icons/rx";
import { FiArrowUpRight } from "react-icons/fi";

const Navbar = () => {
    const navItems = ['parks','solution','explore hozizon','sustainability','contact us']
  return (
    <nav className='p-3 mx-auto w-[96%] text-white '>
        <div className="flex items-center p-3 justify-between ">
            <img src="/public/logo.svg" className='w-28 md:w-32 cursor-pointer lg:w-52' alt="" />


            <div className='flex items-center gap-3 cursor-pointer'>
                <p className='lg:order-1 uppercase text-xs font-semibold lg:text-sm lg:border-r-0 lg:border-l-2 border-r-[1px] px-2'>A blackstone <br /> logistics platform</p>
                <div className='p-2 rounded-full border-2 border-rose-50 hidden sm:block'>
                    <CiSearch className=' lg:text-2xl'/>
                </div>
                <RxHamburgerMenu className='text-lg md:hidden'/>
            </div>

        </div>

        <div className="bottomNav items-center justify-between hidden xl:flex gap-6 mt-5 ">
            {
                navItems.map((item,idx)=>{
                    return <div className="flex items-center justify-between border-t-[1px] w-[15%] text-lg cursor-pointer" key={idx}>
                        <span className='pt-1 uppercase font-semibold '>{item}</span>
                        <FiArrowUpRight className='text-xl' />
                    </div>
                })
            }
            

        </div>
    </nav>
  )
}

export default Navbar