import React, { useEffect } from 'react'
import styled from 'styled-components'
import SubCategory from './SubCategory'
import { useState,useRef } from 'react'
import data from '../data/data';
import { useGlobalAppContext } from '../context/category';

function Slider({id,img,category,title}) {
 
  const {setInfo,enter,openCategory,showId,handleId}=useGlobalAppContext()

  const [page,setPage]=useState()
  const [temLoc,setTempLoc]=useState()
   const con=useRef(null)
   const allCategory=(e,value)=>{

      let subc=data.filter(item=>item.id===value)
      let tempBtn=e.target.getBoundingClientRect()
      setTempLoc(tempBtn)
  handleId(value)
      setPage(...subc)
      setInfo(tempBtn)
      openCategory()
    }
  

    return (
    <>
    <Wrapper ref={con}  onMouseEnter={(e)=>allCategory(e,id)}>

       <div  className='flex li is'>
       {img && <img src={img} alt="name"/>}
       <p>{category}</p>
      </div>
    
        {(enter && id==showId)&&<SubCategory page={page} loc={temLoc}/>}
    </Wrapper>
    </>
  )
}

export default Slider

const Wrapper=styled.section`
min-width:fit-content;

.li{  
    cursor: pointer;
    align-items:center;
    column-gap:.3rem;
    font-size:1.6rem;
    padding:1.6rem 1.5rem 1.6rem 4rem;
    img{
        width:3rem;
    }
    p{
       font-weight:600;
}
}
`