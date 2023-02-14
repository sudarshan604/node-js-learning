import React from 'react'
import styled from 'styled-components'
import { useGlobalAppContext } from '../context/category'
import {RxCross1} from "react-icons/rx"
function SignIn() {

    const {isOPen,closeSignMOdel}=useGlobalAppContext()

  return (<Wrapper className={`${isOPen===true?"active":null}`}>
          <h2>Login to Joysale    <span onClick={closeSignMOdel}><RxCross1/></span> </h2>
          <p>Find sellers and buyers from your neighborhood</p>
         <hr/>
          <form>
             <input type="email" placeholder='Enter your email address'/>
             <input type="text" placeholder='Enter your password'/>
        <div><input type="checkbox"/><p><span>Remember me</span> Forgot Password?</p></div>
          </form>
         <footer>
          <button type='button' className='btn'>Log in</button>
          <p>Social Log in </p>
          <img src="images/google.png"/>
    </footer> 
    <hr/>
   <p className='fp'>Not in this family ?<span>click here</span></p>
  </Wrapper>
  )
}

export default SignIn

const Wrapper=styled.article`
 position:absolute;
 border-radius:5px;
 width:500px;
 height:auto;
 left:50%;
 transition:all .3s;
  transform:translate(-50%,-120%);

  background-color:#fff;
  z-index:99999999;
  box-shadow: 0px 0px 10px rgba(0,0,0,.5);

  h2{
     padding:1rem;
    font-size:1.4rem;
    font-weight:600;
  margin-bottom:.7rem; 
  display:flex;
  justify-content:space-between;
  align-items:center;
  span{
    cursor: pointer;
  }
}
 p{
    padding:1rem;
    font-size:1.4rem;
   margin-bottom:.7rem;
 }
hr{
    opacity:.4;
}
form{
    padding:1rem;
    display:flex;
    flex-direction:column;
    row-gap:1rem;
  input{
    padding:1rem .5rem;
     border-radius:4px;
     border:none;
  border:1px solid grey;
    }
 div{
    display:flex;
    align-items:center;
    column-gap:.8rem;
   font-size:1.4rem; 
  input{
    align-self:center; 
}
span{
    border-right:1px solid grey;
    padding-right:1rem;
    margin-right:1.2rem;
 }
}
}
footer{
  display:flex;
  flex-direction:column;
 align-items:center;
  padding:1rem;
  padding-bottom:2.5rem;
    .btn{
     padding:1.2rem 0;
     border:none;
     border-radius:5px;
     color:#fff;
     font-size:1.4rem;
     background-color:#e40046;
        width:100%;
    }
 p{
    margin-top:1.5rem;
 }
 img{
    width:4rem;
    height:4rem;
    padding:.4rem;
    text-align:center;
  border:1px solid grey;
  border-radius:50%;
}
}
.fp{
    margin-top:2rem;
    font-size:1.4rem;
     text-align:center;
 span{
    color:#e40046;
 }
}
`