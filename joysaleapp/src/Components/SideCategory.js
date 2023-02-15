import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {AiOutlineDown} from "react-icons/ai"
import SideSubCategory from './SideSubCategory'
import data from '../data/data'

function SideCategory({id,img,category}) {

const [page,setPage]=useState()
const [showId,setId]=useState()
const [showVisible,setVisible]=useState()
const [firstClick,setClick]=useState(true)




const handleCategory=(e,value)=>{

    let subc=data.filter(item=>item.id===value)
        setPage(...subc)
     setId(value)
         if (firstClick) {
              setClick(false)
            setVisible(true)           
         } else {
            setVisible(false)
            setClick(true)
         }
     }

     
     


  return (<Wrapper>
    <div className='cla-wra' onClick={(e)=>handleCategory(e,id)}>
       <div className='category-head'>
           <img src={img}/>
          <h3>{category}</h3>
       </div>
      <figure>
         <AiOutlineDown className={`icon`}/>
      </figure>
    </div>
      {(showVisible && id===showId)&&<SideSubCategory {...page}/>}

  </Wrapper>
  )
}

export default SideCategory

const Wrapper=styled.div`
margin-bottom:1rem;
padding-bottom:1rem;
transition:all .3s;
.icon{
    font-size:1.8rem;

}
.cla-wra{
display:flex;
justify-content:space-between;
align-items:center;
margin-top:3rem;
padding:0 2rem;
font-size:1.6rem;
cursor: pointer;
&:hover{
    color:#e40046;
}

.category-head{
    display:flex;
    align-items:center;
    column-gap:1rem;
    img{
        width:3rem;
    }
   
}
}

`