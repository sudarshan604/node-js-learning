import React from "react"
import styled from "styled-components"
import {AiOutlineLeft,AiOutlineRight} from "react-icons/ai"
import { useState,useEffect } from "react"
import data from "../data/ScrollData"
import { useGlobalAppContext } from "../context/category"
const Carousel=()=>{

 const [people,setPeople]=useState(data)
 const [index,setIndex]=useState(0)
 const {closeCategory}=useGlobalAppContext()
 let isActive=0
 useEffect(() => {
  let lastIndex = people.length - 1;
  if (index < 0) {
    setIndex(lastIndex);
  }
  if (index > lastIndex) {
    setIndex(0);
  }
}, [index, people]);

useEffect(()=>{
  let interval=setInterval(()=>{

    setIndex(index+1)
  },3000)
return ()=>clearInterval(interval)
},[index])




  return<Wrapper  onMouseOver={closeCategory}>
         <div className="carousal-content container flex">
           {
                 people.map((item,itemIndex)=>{
                 const {id,img}=item
                let position="nextSLide"
                    if(index===itemIndex){
                       isActive=index
                      position="active"


                 }
          
                 if (
                  itemIndex == index - 1 ||
                  (index === 0 && itemIndex == people.length - 1)
                ) {

                  position = "lastSlide";
                }
      
          
          return <section key={id} className={`${position} flex`}>
                    <figure className="hero-img-box">
                        <img src={img} alt="img"/>
                    </figure>
               </section>  


                 })

           } 
         <div className="rode">
               <div  onClick={() => setIndex(0)} className={`${isActive===0?"agreen red":"red hide"}`}></div>
               <div onClick={() => setIndex(1)}  className={`${isActive===1?"agreen red":"red hide"}`}></div>
               <div  onClick={() => setIndex(2)}   className={`${isActive===2?"agreen red":"red hide"}`}></div>
        </div>

       </div>

       
  </Wrapper>
}

export default Carousel



  const Wrapper=styled.section`
  height:30.2rem;
   overflow:hidden;
      .carousal-content{
        position:relative;
        height:30.2rem;
        section{
    transition:all .3s;
  display:grid;
 grid-template-columns:1fr 1.5fr;
  }
}
.rode{
 position:absolute;
 top:90%;
 z-index:1;
 right:50%;
 transform:translateX(50%) ;
 display:flex;
 column-gap:.4rem;
}
.red{
  width:.6rem;
  height:.6rem;
  border-radius:50%;
 background-color:#fff;
 border:1p solid #fff;
 :hover{
  cursor: pointer;
 }
}
.hide{
  opacity:.4
}
.agreen{
  opacity:1;
  background-color:red;
  transform:scale(1.4)
}
.section-wrapper{
 
}
.active{
  position:absolute;
  top:0;
 transform:translateX(0%) !important;
 opacity:1 !important;
}
.lastSlide{
  position:absolute;
  top:0;
 transform:translateX(-100%) ;
 opacity:0;
}
.nextSLide{
  position:absolute;
  top:0;
 transform:translateX(100%) ;
 opacity:0;
}

.left{
  top:50%;
  font-size:8rem;
   left:4rem;
  transform:translateY(-50%);
  }
  .right{
    font-size:8rem;
    top:50%;
    right:4rem;
    transform:translateY(-50%);
  }
.hero-img-box{
    background-color:#e6e6e6;
    justify-self:end;
    height:100%;
    width:100vw;
    display:flex;
     img{
     align-self:center;
    width:100%;
     stroke:#e6e6e6;
    }
   }

`
