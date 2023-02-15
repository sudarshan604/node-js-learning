import React, { useState } from 'react'
import styled from 'styled-components'
import {RxCross1} from "react-icons/rx"
import { useGlobalAppContext } from '../context/category'
import data from '../data/data'
import SideCategory from './SideCategory'
import {AiOutlineDown} from "react-icons/ai"
function Sidebar() {
    const {closeSidebar,showSidebar}=useGlobalAppContext()

  const {openModelSign,openSignUp}=useGlobalAppContext()
    return (
    <Wrapper  className={`${showSidebar===true?"show":"notshow"}`}>
         <header>
            <h3>Category</h3>
            <span><RxCross1 className='icon' onClick={closeSidebar} /></span>
         </header>
      <main>
      {
         data.map(item=>{
           if(item.id===1234)
           {
            return
           }
       return <SideCategory key={item.id} {...item}/>               
      })
    }
      <footer>
            <button onClick={openModelSign}>Login</button>
            <button onClick={openSignUp}>SignUp</button>

      </footer>
      </main>

    </Wrapper>
  )
}

export default Sidebar

const Wrapper=styled.aside`
 z-index:4939493;
 position:fixed;
 top:0;
 width:30rem;
 height:100%;
 background-color:#fff;
 box-shadow: 0px 0px 10px rgba(0,0,0,.5);
 transition:all .3s;
  overflow-y:scroll;
 &::-webkit-scrollbar {
  width: 10px; 
}
&::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.3); 
  border-radius: 5px;
}

 footer{
  margin-top:8rem;
 margin-bottom:8rem;
 display:flex;
 justify-content:center;
 padding:0 1.4rem;
  column-gap:1rem;
 button{
  width:50%;
  padding:1rem .4rem; 
  border:none;
  border-radius:5px;
  color:#fff;
  font-weight:500;
  font-size:1.4rem;
  background-color:#e40046;
  cursor: pointer;
}
button:last-child{
  background-color:#222;

} 
}
 .article{
  display:flex;
justify-content:space-between;
align-items:center;
margin-top:3rem;
padding:0 2rem;
font-size:1.4rem;
.category-head{
    display:flex;
    align-items:center;
    column-gap:1rem;
    img{
        width:3rem;
    }
}

 }

header{
    padding:2.5rem 1.5rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:#e40046;
    position:sticky;
    top:0;
    color:#fff;
    span{
        .icon{
            cursor: pointer;  
          font-size:1.4rem;
          font-weight:700;
        }
    }
    h3{
        font-size:1.6rem;
        font-weight:600;
    }
}
`