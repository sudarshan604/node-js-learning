import React from "react"
import styled from "styled-components"
import {AiOutlineLeft,AiOutlineRight} from "react-icons/ai"
import { useState,useEffect } from "react"
import data from "../data/ScrollData"
import { useGlobalAppContext } from "../context/category"
import { useRef } from "react"
const Carousel=()=>{

  const imgBox=useRef()
  const Box=useRef()
  const container=useRef()
  const Box1=useRef()
 const [people,setPeople]=useState(data)
 const [index,setIndex]=useState(0)
 const {closeCategory}=useGlobalAppContext()
 const [resize,setResize]=useState()
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

window.onresize = () => {
  setResize(window.innerWidth)
};


useEffect(()=>{
  let he=imgBox.current.offsetHeight
  Box.current.style.height= he
  container.current.style.height= `${he}px`
   he=he-25
  Box1.current.style.top= `${he}px`
  let interval=setInterval(()=>{

    setIndex(index+1)
  },3000)
return ()=>clearInterval(interval)

},[index,resize])





  return<Wrapper ref={container} onMouseOver={closeCategory}>
         <div ref={Box} className="carousal-content container flex">
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
      
          
          return <section ref={imgBox} key={id} className={`${position} flex img-section`}>
                    <figure className="hero-img-box">
                        <img src={img} alt="img"/>
                    </figure>
               </section>  


                 })

           } 
         <div className="rode" ref={Box1}>
               <div  onClick={() => setIndex(0)} className={`${isActive===0?"agreen red":"red hide"}`}></div>
               <div onClick={() => setIndex(1)}  className={`${isActive===1?"agreen red":"red hide"}`}></div>
               <div  onClick={() => setIndex(2)}   className={`${isActive===2?"agreen red":"red hide"}`}></div>
        </div>

       </div>

       
  </Wrapper>
}

export default Carousel



  const Wrapper=styled.section`
   overflow:hidden;
   margin-top:14rem;
   .carousal-content{
        position:relative;
           section{
    transition:all .3s;
  display:grid;
 grid-template-columns:1fr 1.5fr;
}
}
.rode{
 position:absolute;
 right:50%;
 z-index:1;

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
