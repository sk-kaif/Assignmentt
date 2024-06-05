import { useEffect, useState } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";

const DetailCard = () => {
    const {id} = useParams()
    const navigate = useNavigate();
    const [data,setData] = useState(null)
    
 
    const fetchData = async()=>{
      try {
        const response = await fetch(`https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/posts/${id}`)
        const data = await response.json();
        setData(data);
      } catch (error) {
          console.log(error,'sometime went wrong');
        }
    }
    
    useEffect(()=>{fetchData()},[])

  return (
    <div className=" w-[90%] mx-auto my-3 ">
        {
            data && 
            <div className="md:flex gap-5 justify-between shadow-xl px-2">
                <div className="left md:w-[30%] flex items-center justify-center">
                    <img src={data.acf.featured_slider_image} className="w-full h-[450px] object-cover"  />
                </div>
                <div className="rigth md:w-[70%]">
                    <h1 className="text-xl font-semibold py-3">{data.acf.meta_title}</h1>
                    <div className="flex items-center gap-3 pb-5"><MdOutlineDateRange /> {data.acf.blog_publish_date}</div>
                    <h1>{data.acf.meta_description}</h1>
                    <h1>{data.acf.meta_description}</h1>
                    <button onClick={()=>navigate('/')} className="bg-slate-400 px-3 text-lg rounded-sm cursor-pointer font-semibold my-3">Home</button>
                </div>
            </div>
        }
    </div>
  )
}

export default DetailCard