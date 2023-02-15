import React from 'react'
import styled from 'styled-components'
import {AiOutlineDown} from "react-icons/ai"

function SideSubCategory({sub_category=[]}) {

 console.log(sub_category)
return (<Wrapper>
{sub_category.map(item=>{
    return <article key={item.id}>
               <h3>{item.category}</h3>
              <span><AiOutlineDown className={'icon'}/></span>
    </article>
})

}   
    </Wrapper>
  )
}

export default SideSubCategory

const Wrapper=styled.div`
  
   display:flex;
   flex-direction:column;
   /* row-gap:1rem; */
  font-size:1.4rem;
   .icon{
    font-size:1.8rem;
    
   }
 article{
    font-size:1.2rem;
  padding:1rem 1.3rem;
  padding-left:4rem;
  opacity:.6;
    display:flex;
    justify-content:space-between;
    align-items:center;
    cursor: pointer;
  &:hover{
    color:#e40046;
  } 
}
 `