import { MdOutlineDateRange } from 'react-icons/md';

const Cart = ({dateSize, despText, ownGap,item }) => {  

  if (!item) {
    return null; 
  }

  return (
    <div style={{backgroundImage: `url(${item.acf.blog_image})`}} className={`cartBg w-full h-full flex flex-col ${ownGap} justify-end text-white p-4 rounded-md`}>
      <div className={`rounded-md lg:text-xl w-fit bg-[#313D47] p-2`}>
        <p className=''>{item.category}</p>
      </div>
      <h1 className={`md:${despText}`}>{item.title}</h1>
      <div className="flex items-center gap-3">
        <MdOutlineDateRange />
        <p className={`lg:${dateSize} text-sm`}>{item.acf.blog_publish_date}</p>
      </div>
    </div>
  );

}


export default Cart

