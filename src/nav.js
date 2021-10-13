import CartWidget from "./cartWidget"
import { Link } from "react-router-dom"
import Dropdown from "react-bootstrap/Dropdown";


const nav =({carrito})=>{
    

   
   
    
  
  return(
        <header id = "header">
       
           <nav className="navbar ">
                       
                  <Link to="/">
                  <h3>e-commerce</h3>
                  </Link>
             
                  <Dropdown className="categorias" tittle="Categorias">
                     <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Categortias
                     </Dropdown.Toggle>

                     <Dropdown.Menu>
                   <div  className="categoria">
                  <Link to="/categoria/remera" >Remeras</Link>
                  <Link to="/categoria/pantalon">Pantalon</Link>
                  <Link to="/categoria/campera">Campera</Link>
                  <Link to="/categoria/gorra">Gorra</Link>
                  </div>
                     </Dropdown.Menu>
                </Dropdown>
             
             
             
             
                  <CartWidget/>
           </nav>
           
      
        </header>


    )
}

export default nav