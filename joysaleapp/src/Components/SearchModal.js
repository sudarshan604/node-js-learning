import React from 'react'
import styled from 'styled-components'
import {BiSearchAlt} from  "react-icons/bi";
import {MdLocationPin} from "react-icons/md"
import {RxCross1} from "react-icons/rx"
import { useGlobalAppContext } from '../context/category';

function SearchModal() {
    const {closeSearch,search}=useGlobalAppContext()
  return (
    <Wrapper className={`${search===true?"active":null}`}>
        <header>
         <h2>Search  </h2><span><RxCross1 className='icon' onClick={closeSearch} /></span>
        </header>
          <hr />
          <div>
            <BiSearchAlt className='icon'/>
             <input type="text" placeholder='search product'/>
          </div>
          <div>
             <MdLocationPin className='icon'/>
             <input type="text" placeholder='worldwide'/>
          </div>
          <button className='btn'>
            Search
          </button>
           </Wrapper>
  )
}

export default SearchModal

const Wrapper=styled.section`
   position:fixed;
 border-radius:5px;
 width:45rem;
 height:auto;
 left:50%;
 display:flex;
 flex-direction:column;
 row-gap:1.5rem;
 transition:all .3s;
  transform:translate(-50%,-200%);

  background-color:#fff;
  z-index:99999999;
  box-shadow: 0px 0px 10px rgba(0,0,0,.5);
 .btn{
    width:94%;
    padding:1.4rem .2rem;
  background-color:#e40046;
  border:none; 
  margin:0 auto;
  border-radius:5px;
  color:#fff;
  font-size:1.4rem;
}
  h2{
    margin-left:1.4rem;
 }
 header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-right:1.4rem;
 }
  div{
    border:1px solid rgba(0,0,0,.2);
    border-radius:5px;
    padding:1.2rem .4rem;
margin:0 1.5rem; 
 display:flex;
 align-items:center;
}
  input{
    border:none;
    outline:none;
  margin-left:1rem; 
 height:2rem;
}
.icon{
    font-size:1.4rem;
    cursor: pointer;
}

padding:2rem 0;
`