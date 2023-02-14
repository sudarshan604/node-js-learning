import React, { useContext, useState } from "react";



const AppContext=React.createContext()


const AppProvider=({children})=>{

 const [location,setLocation]=useState()
 const [node,setNode]=useState()
const [isOPen,setOPen]=useState(false)
const [open,setSignUp]=useState(false)
const [enter,setEnter]=useState()
const [showId,setId]=useState(null)
const [scroll,setScroll]=useState()

const setInfo=(loc)=>{
  setLocation(loc)
}

const openModelSign=()=>{
  document.body.style.overflow = 'hidden';
  setOPen(true)
}
const closeSignMOdel=()=>{
  document.body.style.overflow= 'visible';

  setOPen(false)
}
const openSignUp=()=>{
  document.body.style.overflow = 'hidden';

  setSignUp(true)
}
const closeSignUp=()=>{
  document.body.style.overflow= 'visible';

  setSignUp(false)
}
const openCategory=()=>{
  setEnter(true)
}
const closeCategory=()=>{
 setEnter(false)
}

const handleId=(id)=>{
  setId(id)
}
const handleScroll=(value)=>{
   console.log(value)
  setScroll(value)
}

  return <AppContext.Provider value={{handleScroll,scroll,handleId,showId,enter,setInfo,location,node,openModelSign,isOPen,closeSignMOdel,openSignUp,open,closeSignUp,openCategory,closeCategory}}>
     {children}
  </AppContext.Provider>
}

export const useGlobalAppContext=()=>{
    return useContext(AppContext)
}

export default AppProvider