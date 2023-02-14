import React from 'react'
import styled from 'styled-components'

function ProductCard({img,name,price,address}) {
  return (<Wrapper>
        <figure>
               <img src={img} alt={name}/>
        </figure>
   <footer>
       <h2>{price}</h2>
       <h3>{name}</h3>
       <h3>{address}</h3>
   </footer>
 
  </Wrapper>
  )
}

export default ProductCard



const Wrapper=styled.article`
 overflow:hidden;
 background-color:#fff;
  border-radius:6px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 33px 0px;
footer{
    padding: 1rem 1rem;
  font-size:1rem;
  display:flex;
  flex-direction:column;
  row-gap:.5rem;
   font-size:1rem;
  h2{
    font-size:1.4rem;
    font-weight:700;
    margin-bottom:1rem;
  }
   h3{
    font-weight:400;
    
    opacity:.6; 
}
h3:last-child{
    font-size:1.4rem;
    opacity:.4;
    font-weight:500;
}

}
  figure{
    overflow:hidden;
     img{
        width:100%;
        height:30rem;
        object-fit:cover;
        transition:all .3s;
        transform:scale(1.1);
      cursor: pointer;
      &:hover{
        transform:scale(1.3);
      } 
    }
  }

 `