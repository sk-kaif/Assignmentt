import { useContext } from 'react';
import Cart from './Cart'
import { MyContext } from '../App';

const CartSections = () => {
    const {data} = useContext(MyContext)
    const limitedData = data.slice(0, 1);
    // console.log(limitedData);
  return (
    <div className='mx-auto w-[90%] lg:flex justify-between gap-2 py-7 overflow-hidden' >
        <div className="lg:w-[65%] lg:h-[530px] h-[300px] my-2 lg:my-0 ">
            <Cart despText='text-3xl' ownGap='gap-2' dateSize='text-lg' limitedData={limitedData} />
        </div>


        <div className="lg:w-[35%] h-[530px] flex flex-col justify-between">
            <div className="h-[260px]">
                <Cart despText='text-xl' ownGap='gap-1' dateSize='text-sm'/>
            </div>
            <div className="h-[260px]">
                <Cart despText='text-xl' ownGap='gap-1' dateSize='text-sm'/>
            </div>
        </div> 


    </div>
  )
}

export default CartSections