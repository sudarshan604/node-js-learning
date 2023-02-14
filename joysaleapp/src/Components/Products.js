import React from 'react'
import styled from 'styled-components'
import ProductCard from './ProductCard'
import Data from '../data/CardData'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import { useState,useEffect } from 'react'

function Products() {
 const [data,setData]=useState([])
 const [allData,setAllData]=useState(Data)
 const [moreProduct,setMoreProduct]=useState(false)
 
 useEffect(() =>{
       let newData=allData.slice(0,8) 
        setData(newData)
  
},[])

const handleProduct=()=>{

     let length=allData.length
     let newData=allData.slice(9,12) 
    setMoreProduct(true)
   setData(data=>[...data,...newData])

    

}
 

 return (
    <Wrapper>
  <div className='product-list'>

         {
             data.map(item=>{
                 return <ProductCard key={item.id} {...item} />
                })
            }
    </div>
  <div className='product-footer'>
    {!moreProduct &&<><AiOutlinePlusCircle className='icon' onClick={handleProduct}/>
       <p>More ads</p>
    </> 
    }
       </div>

    </Wrapper>
  )
}

export default Products

const Wrapper=styled.section`
/* margin-top:40rem; */
    padding-bottom:7rem;
    background-color:#F8F6F0;
.product-list{
margin-top:1rem;
 padding-left:2%;
 padding-right:2%;
display:grid;
grid-template-columns:repeat(4,1fr);
 column-gap:1.4rem;
row-gap:1.6rem;
}
.product-footer{
    height:10rem;
    width:100%;
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 color:#91a7b9;
 .icon{
    font-size:3rem;
    font-weight:400;
    cursor: pointer;
 }
p{
    font-size:1.6rem;
}
}
 
`