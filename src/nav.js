import CartWidget from "./cartWidget"
import { Link } from "react-router-dom"


const nav =({carrito})=>{
    
  
    
  
  return(
        <header id = "header">
       
           <nav class="navbar ">
                       
                       <Link to="/">
                        <h1>e-commerce</h1>
                        </Link>
                        <Link to="/categoria/remera">remera</Link>
                        <Link to="/categoria/pantalon">pantalon</Link>
                        <Link to="/categoria/campera">campera</Link>
                        <Link to="/categoria/gorra">gorra</Link>
                        <CartWidget/>
           
           </nav>
           
      
        </header>


    )
}

export default nav