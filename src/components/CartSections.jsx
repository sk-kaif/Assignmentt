import { useContext } from 'react';
import Cart from './Cart'
import { MyContext } from '../App';

const CartSections = () => {
    const {data} = useContext(MyContext)
    const limitedData = data.slice(0, 1);
    const limitedData2 = data.slice(2, 4);
  return (
    <div className='mx-auto w-[90%] lg:flex justify-between gap-2 py-7 overflow-hidden ' >
        <div className="lg:w-[65%] lg:h-[530px] h-[300px] my-2 lg:my-0 ">
            {
                limitedData.map((item)=> <Cart despText='text-3xl' ownGap='gap-2' dateSize='text-lg' item={item} key={crypto.randomUUID()} /> )
            }
        </div>


            <div className="h-[530px] flex flex-col justify-between gap-5">
            {
                limitedData2.map((item)=> <Cart despText='text-3xl' ownGap='gap-2' dateSize='text-lg' item={item} key={crypto.randomUUID()} /> )
            }
                
            </div>


    </div>
  )
}

export default CartSections