import CartWidget from "./cartWidget"
import { Link } from "react-router-dom"


const nav =({nombre,apellido})=>{

    return(
        <header id = "header">
       
           <nav class="navbar ">
                       
                       <Link to="/">
                        <h1>e-commerce</h1>
                        </Link>
                        <Link to="/gorra">categoria 1</Link>
                        <Link to="/campera">categoria 2</Link>
                   
                        <CartWidget/>
           
           </nav>
           
      
        </header>


    )
}

export default nav