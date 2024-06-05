import HeroSection from './components/HeroSection'
import CartSections from './components/CartSections'
import MultiplySecion from './components/MultiplySecion'
import Footer from './components/Footer'
import { createContext, useEffect, useState } from 'react'


export const MyContext = createContext()

const App = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
    fetchData()
  },[])
  
  const fetchData = async()=>{
    try {
      const response = await fetch(`https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/posts`)
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error,'sometime went wrong');
    }
  }

  return (
    <MyContext.Provider value={{data,setData}}>
      <HeroSection />
      <CartSections />
      <MultiplySecion />
      <Footer /> 
    </MyContext.Provider>
  )
}

export default App
