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
const [search,setSearch]=useState(false)
const [showSidebar,setSideBar]=useState(false)
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
const openSearch=()=>{
  document.body.style.overflow = 'hidden';

  setSearch(true)
}
const closeSearch=()=>{
  document.body.style.overflow= 'visible';

   setSearch(false)
}

const handleId=(id)=>{
  setId(id)
}
const handleScroll=(value)=>{
  setScroll(value)
}

const openSidebar=()=>{
  document.body.style.overflow = 'hidden';
  setSideBar(true)
}
const closeSidebar=()=>{
   setSideBar(false)
   document.body.style.overflow= 'visible';

}

  return <AppContext.Provider value={{showSidebar,openSidebar,closeSidebar,openSearch,closeSearch,search,handleScroll,scroll,handleId,showId,enter,setInfo,location,node,openModelSign,isOPen,closeSignMOdel,openSignUp,open,closeSignUp,openCategory,closeCategory}}>
     {children}
  </AppContext.Provider>
}

export const useGlobalAppContext=()=>{
    return useContext(AppContext)
}

export default AppProvider