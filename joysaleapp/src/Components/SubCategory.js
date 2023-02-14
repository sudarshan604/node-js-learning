import React from 'react'
import styled from 'styled-components'
import {useState, useRef,useEffect } from 'react'
import {AiFillCaretRight} from "react-icons/ai"
import { useGlobalAppContext } from '../context/category'


function SubCategory({page,loc})
{

const {sub_category}=page


  const [isHovered, setIsHovered] = useState();
   const container=useRef()
   const seeNode=useRef()
   const [show,setShow]=useState(false)
   const [dataset,setDataSet]=useState(0)
   const {location,node,scroll}=useGlobalAppContext()


 
    useEffect(()=>{
      if(loc){
        let rect =location.width;
        container.current.style.width = `18rem`; 
   
      }

      else{
        let rect =location.width;

        container.current.style.width = `18rem`; 
        container.current.style.left = `18rem`; 
      }
    },[location,container.current])
  



      const handleMouseEnter = (e,id) => {
        let tempBtn=e.target.getBoundingClientRect()

        setIsHovered(id);
        setShow(true)

      }
      
      const handleMouseLeave = () => {
        setIsHovered(null);
      }
    




  return (<Wrapper ref={container} >
         {Array.isArray(sub_category) ? sub_category.map((item,index) => {
            return (
        <div ref={seeNode} key={index} className="div-v" onMouseEnter={(e)=> handleMouseEnter(e,item.id)}  onMouseLeave={handleMouseLeave}>
                <div className='pc'>
                  <p className='p'>{item.category}  </p> 
                  {item.sub_category&&<span className='icon'><AiFillCaretRight/></span> }</div>
                    {isHovered === item.id && <SubCategory page={item} />}
                </div>
            )
        }) : null}
       
       </Wrapper>
  )
}

export default SubCategory


const Wrapper=styled.div`
position:absolute;
z-index:999999999999999999;
box-shadow: 0px 0px 10px rgba(0,0,0,.5);
 cursor: pointer;
  animation: move-right .1s linear;
  animation-delay: .1s; 
  background-color:#fff;
  animation-fill-mode: forwards;
  
  .pc{
    display:flex;
    justify-content:space-between;
    position:relative;

&:hover{
  color:red;
}
    span{
    display:inline-block;
    align-self:flex-start;
   position: absolute;
   right:0;
   bottom:-.5rem;;
  }
  }
@keyframes move-right {
  to {
    transform: translateX(5px);
  }
}
.div-v{
  padding:.8rem .4rem;
  font-size:1.4rem;
  font-weight:600;

}
`