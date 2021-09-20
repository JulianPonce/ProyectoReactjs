import { Link } from "react-router-dom"
import React,{useContext} from "react"


const Item = ({element}) => {

   return(
      <>
         <li key={element.id}>{element.categoria} {element.precio}$</li>
         <Link to={`/item/${element.id}`}>ver mas</Link>
      </>
   )
}

export default Item