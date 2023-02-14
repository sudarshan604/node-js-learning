import React from 'react'
import styled from 'styled-components'
import {RxCross1} from "react-icons/rx"
import { useGlobalAppContext } from '../context/category'
function Sidebar() {
    const {closeSidebar,showSidebar}=useGlobalAppContext()
   
    return (
    <Wrapper  className={`${showSidebar===true?"show":"notshow"}`}>
         <header>
            <h3>Category</h3>
            <span><RxCross1 className='icon' onClick={closeSidebar} /></span>
         </header>
  

    </Wrapper>
  )
}

export default Sidebar

const Wrapper=styled.aside`
 z-index:493949349349439349439;
position:fixed;
top:0;
width:30rem;
height:100vh;
background-color:#fff;
box-shadow: 0px 0px 10px rgba(0,0,0,.5);
 transition:all .3s;

header{
    padding:2.5rem 1.5rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:#e40046;
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