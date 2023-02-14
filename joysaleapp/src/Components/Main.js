import Carousel from "./Carousel"
import data from "../data/ScrollData"
import Products from "./Products"
import { useGlobalAppContext } from "../context/category"
function Main() {

  const {closeCategory}=useGlobalAppContext()
  return (<main onMouseOver={closeCategory}>
      <Carousel/>
     <Products />
  </main>
  )
}

export default Main