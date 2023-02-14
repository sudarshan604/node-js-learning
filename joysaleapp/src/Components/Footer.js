import React from 'react'
import styled from 'styled-components'
function Footer() {
  return (<Wrapper>
      <section>
          <aside className='aside first-aside'>
                <p>Happy Sopping with Joysale</p>
                <figure>
                    <img src="images/google.png" alt="google logo" />
                    <img src="images/twitter.png" alt="twitter logo" />
                </figure>
         </aside>
          <aside className='aside second-aside'>
              <p>Download Apps using this link ios appandroid appPromoting your brands under a banner section to reach more traffic among users</p>
              <figure>
                    <img src="images/google.png" alt="google logo" />
                    <img src="images/twitter.png" alt="twitter logo" />
            </figure>  
       </aside>
       <aside className='aside third-aside'>
          <button className='btn'>Banner Advertise</button>
     </aside>
      </section>

     <div>
        <div>
         <ul className='list'>
              <li>Terms and Policy</li>
              <li>Safety Tips</li>
              <li>Reach</li>
              <li>User Help</li>
         </ul>
          <p className='para'> &#169; Copyright 2023 Appkodes.com Limited. All rights reserved</p>
          </div>
  </div> 
  </Wrapper>  )
}

export default Footer

const Wrapper=styled.footer`
width:90%;
margin:0 auto;
 margin-top:15rem;
padding-bottom:7rem;

.btn{
  padding:1rem 1.5rem;
  background-color:#e40046;
  color:#fff;
  border:none;
  border-radius:5px;
  width:17rem;
}
.para{
    font-size:1.4rem;
    margin-top:1rem;
}
.list{
    display:flex;
    font-size:1.4rem;
    list-style:none;;
     column-gap:1rem;
     width:fit-content;
     li{
         /* color:#EEE7DF; */
         color:rgba(0,0,0,.7);
         position:relative;
       padding-right:1rem;
         &:after{  
       content:"";
       position:absolute;
       top:50%;
       transform:translateY(-50%);
       right:0;
     height:1rem;
     width:1px;
     background-color:rgba(128,128,128,.7);
      }
    }
  li:last-child{
    &:after{  
        content:"";
        background-color:transparent;
    }
  }
}
section{
    display:flex;
    justify-content:space-between;
  font-size:1.4rem;
  color:#222;
 border-bottom:1px solid rgba(128,128,128,.5);
 padding-bottom:1.5rem;
 margin-bottom:2.8rem;
}

.aside{
    figure{
        margin-top:1.2rem;
    }
}
.first-aside{
    width:25%;
  img{
    display:inline-block;
    margin-right:1rem;
  }
}
.second-aside{
    p{
  max-width:80%;
  text-align:center;
    }
}
.third-aside{
    width:10%;
}
`