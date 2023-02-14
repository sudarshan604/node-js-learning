import { Navbar,Main,Footer,SignIn,SignUp,Top,SearchModal,Sidebar } from "./Components";
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

  const {search,isOPen,open,closeSignUp,closeSignMOdel,closeSearch,showSidebar}=useGlobalAppContext()

  const isVisible = useMemo(() => scrollY >= 500, [scrollY]);


return (<>
      {isVisible && <Top />}

{(isOPen | open|search | showSidebar) &&<Wrapper onClick={()=>{
  closeSignUp()
  closeSignMOdel()
  closeSearch()
}}>
      
    </Wrapper>
}
<SearchModal/>
<SignIn/>
 <SignUp/>
 <Sidebar/>

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