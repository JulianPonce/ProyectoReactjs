import CartWidget from "./cartWidget"
import { Link } from "react-router-dom"
import Button from "@restart/ui/esm/Button"
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";


const nav =({carrito})=>{
    
  
    
  
  return(
        <header id = "header">
       
           <nav class="navbar ">
                       
                  <Link to="/">
                  <h1>e-commerce</h1>
                  </Link>
                        
                <DropdownButton id="dropdown-basic-button" class="categorias" title="Categorias">
                <Dropdown.Item href="/categoria/remera"><Link to="/categoria/remera" >Remeras</Link></Dropdown.Item>
                <Dropdown.Item href="/categoria/pantalon"><Link to="/categoria/pantalon">pantalon</Link></Dropdown.Item>
                <Dropdown.Item href="/categoria/campera"><Link to="/categoria/campera">campera</Link></Dropdown.Item>
                <Dropdown.Item href="/categoria/gorra"><Link to="/categoria/gorra">gorra</Link></Dropdown.Item>   
                </DropdownButton>
                     
                        <CartWidget/>
                       
           
           </nav>
           
      
        </header>


    )
}

export default nav