import CartWidget from "./cartWidget"
import { Link } from "react-router-dom"
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";


const nav =({carrito})=>{
    

   
   
    
  
  return(
        <header id = "header">
       
           <nav className="navbar ">
                       
                  <Link to="/">
                  <h3>e-commerce</h3>
                  </Link>
               <div className="categoria" > 
                  <DropdownButton id="dropdown-basic-button" className="categorias" title="Categorias">
                  <Dropdown.Item ><Link to="/categoria/remera" >Remeras</Link></Dropdown.Item>
                  <Dropdown.Item><Link to="/categoria/pantalon">Pantalon</Link></Dropdown.Item>
                  <Dropdown.Item><Link to="/categoria/campera">Campera</Link></Dropdown.Item>
                  <Dropdown.Item><Link to="/categoria/gorra">Gorra</Link></Dropdown.Item>   
                  </DropdownButton>
                </div> 
                   <div>
                    
                  
                        
                 
                 
                  </div>
                  <CartWidget/>
           </nav>
           
      
        </header>


    )
}

export default nav