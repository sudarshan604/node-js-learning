import styled from 'styled-components'
import {BiSearchAlt} from  "react-icons/bi";
import {MdLocationPin} from "react-icons/md"
import {BsCamera} from "react-icons/bs"
import {AiOutlineLeft} from 'react-icons/ai'
import {AiOutlineRight} from "react-icons/ai"
import Slider from './Slider';
import data from '../data/data';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useGlobalAppContext } from '../context/category';
function Navbar() {
    const [showArrow,setArrow]=useState(true)
   const [leftArrow,setLeftArrow]=useState(true)
   const scrollElement=useRef()
  const {openModelSign,openSignUp,closeCategory,handleScroll}=useGlobalAppContext()

   
  

    


    function rightSlide(){
      const elem=scrollElement.current.getBoundingClientRect();
      const {current}=scrollElement
      handleScroll(current.scrollLeft)
      if(scrollElement.current.scrollLeft + current.clientWidth >=current.scrollWidth){
        setArrow(!showArrow)
        return
    }
  
    if(current.scrollLeft>=0)
    {
        setLeftArrow(true)
    }

      scrollElement.current.scrollLeft += 250;  
    }
   
    function leftSlide(){
        const {current}=scrollElement
         if(current.scrollLeft + current.clientWidth<current.scrollWidth){
            setArrow(true)
         }
     if(current.scrollLeft<=0)
     {
         setLeftArrow(!leftArrow)
          return
        }  
   
       current.scrollLeft-=250;  
        console.log(current.scrollLeft)
    }

    return (
   <Wrapper>
     <header onMouseOver={closeCategory} className='flex'>
         <figure>
           <img src={"https://joysale.appkodes.in/frontend/web/media/logo/7470_3208_6644_app_logo.png"} alt="title name"/>
          </figure>
         <div className='search-field'>
            <div className='first-i'>
              <span>
                <BiSearchAlt className='icon dark'/>
            </span>
            <input type="text" placeholder='Search products'/>  
            </div>
            <div className='second-i'>
               <span><MdLocationPin className='icon dark'/></span>
               <input type="text" placeholder='Global Stuff'/>
               <div className='sp'>Go</div>  
             </div>
          </div>
        <ul>
           <li onClick={openModelSign}>Log in</li>
           <li onClick={openSignUp}>Sign up</li>
           <li>
            <BsCamera/>
            SELL
            </li>
        </ul>
     </header>
     <footer>
 <section ref={scrollElement} className='slider-section'>
       {data.map(item=>{
           return<Slider key={item.id} {...item}/>
        })}
 </section>
         { showArrow &&<button onClick={rightSlide} className="btn btn-right">
                     <AiOutlineRight className='icon'/>
                </button>
           }
         
       { leftArrow&&<button onClick={leftSlide}  className="btn btn-left">
                     <AiOutlineLeft className='icon'/>
                </button>}
        </footer>
 
    </Wrapper>
  )
}

export default Navbar

const Wrapper=styled.nav`
 position:sticky;
 top:0;
 z-index:20;
 header{
     padding:1.2rem 2rem;
    background-color:#e40046;
   font-size:1.4rem;
    color:#fff;
    justify-content:space-between;
    align-items:center;
  .search-field{
    display:flex;
    align-items:center;
    width:41.1%;
   background-color:#fff;
   overflow:hidden;
    border-radius:5px;
      .first-i{
        width:50%;
       display:flex;
     align-items:center;
     border-right:1px solid rgba(0,0,0,.2);
     .icon{
      margin-left:.6rem;
     }
   .dark{
     color:rgba(0,0,0,.5) !important;
     
   }
     input{
        margin-left:.5rem;
     }
      input::-webkit-input-placeholder {
         opacity:.4;
        font-weight:700;
        color:#222;  
    }
  
    }
    .second-i{
       display:flex;
       width:50%;
       align-items:center;
       padding-left:.5rem;
      input{
        margin-left:.5rem;
}
     .sp{
        color:#444;
        font-weight:700;
        align-self:center;
        align-content:stretch;
        margin-left:auto;
        padding:1.3rem 1.8rem;
        background-color:rgba(0,0,0,.2);
 
}
    }
    .icon{
    color:rgba(0,0,0,.5);
    font-size:2rem;
   }
   input{
        border:none;
       outline:none;
    background:transparent;
    height:4rem;    
}
  }

    img{
    height:2.9rem;
  }
 ul {
     display:flex;
     justify-content:space-between;
     align-items:center;
     row-gap:2rem;
     width:15%;
 li{
  list-style:none;;
  font-weight:700;
  cursor: pointer;
}
 li:last-child{
    border:1px solid #fff;
    padding:.6rem 1.5rem;
    border-radius:5px;
    display:flex;
    align-items:center;
    column-gap:1rem;

 }
  }

}
.slider-section{
  display:flex;
  align-items:center;
 scroll-behavior: smooth;
 column-gap:1rem;
 overflow:hidden;
 width:95%;
 padding-right:20rem;
 margin:0 auto;
 z-index:100;
}
.btn{
   position:absolute;
    font-size:20px;
   transform:translateY(-50%); 
  border:none;
  background:transparent;
  font-size:2.2rem;
  color:#333;
 cursor: pointer;
  .icon{
    font-weight:700;
  }
}
 .btn-right{
    top:50%;
   right:1rem;
}
.btn-left{
    top:50%;
   left:1rem;
}
footer{
    background-color:#fff;
  position:relative;
}

`
