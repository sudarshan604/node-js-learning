import { Navbar,Main,Footer,SignIn,SignUp,Top } from "./Components";
import styled from "styled-components";
import { useGlobalAppContext } from "./context/category";
import { useEffect, useState,useMemo } from "react";
function App() {
 const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);

    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const {isOPen,open,closeSignUp,closeSignMOdel}=useGlobalAppContext()

  const isVisible = useMemo(() => scrollY >= 500, [scrollY]);

  console.log(scrollY)

return (<>
      {isVisible && <Top />}

{(isOPen | open) &&<Wrapper onClick={()=>{
  closeSignUp()
  closeSignMOdel()
}}>
      
    </Wrapper>
}
<SignIn/>
 <SignUp/>
 <Navbar/>
     <Main/>
     <Footer/>
  </>
  );
}

export default App;

const Wrapper=styled.div`
   background-color:black;
   position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
   opacity:.3;
 z-index:9999999;
`