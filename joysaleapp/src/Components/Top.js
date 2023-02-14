import React from 'react'
import styled from 'styled-components'
import {MdKeyboardArrowUp} from 'react-icons/md'
function Top() {

    const handleCLick=()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }
    return( 
         <Wrapper onClick={handleCLick}>
            
           <MdKeyboardArrowUp/>
           <p>Back to top</p>
         </Wrapper>
    )

}

export default Top

const Wrapper=styled.div`
 position:sticky;
 cursor: pointer;
 top:24%;
 left:50%;
 display:flex;
 width:fit-content;
 align-items:center;
 column-gap:1rem;
 color:black;
 transform:translateX(-50%);
 font-size:3rem;
 z-index:10000000000000000000;
 background-color:#fff;
 box-shadow: 0px 0px 10px rgba(0,0,0,.5);
padding:.5rem 1rem;
border-radius:5px;
p{
    font-size:1.4rem;
}
`