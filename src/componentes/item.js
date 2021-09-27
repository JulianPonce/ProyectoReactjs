import { Link } from "react-router-dom"
import React,{useContext} from "react"


const Item = ({element}) => {

   return(
      <>
      <div>{element.imagenUrl}</div>
         <li key={element.id}>{element.titulo} {element.precio}$</li>
         <Link to={`/item/${element.id}`}>ver mas</Link>
      </>
   )
}

export default Item