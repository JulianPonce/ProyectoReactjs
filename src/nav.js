import CartWidget from "./cartWidget"
import { Link } from "react-router-dom"
import Button from "@restart/ui/esm/Button"
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Form from 'react-bootstrap/Form'
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import InputGroup from "react-bootstrap/esm/InputGroup"
import FormControl from "react-bootstrap/esm/FormControl"

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
                    
                    
                    
                     <Form>
                       <Row className="align-items-center">
                           <Col xs="auto">
                              <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                              Nombre
                              </Form.Label>
                              <Form.Control className="mb-1" id="inlineFormInput" placeholder="Nombre"/>
                           </Col>
                           
                           <Col xs="auto">
                             
                              <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                              Apellido
                              </Form.Label>
                              <FormControl className="mb-1" id="inlineFormInputGroup" placeholder="Apellido" />
                             
                           </Col>
                           
                           <Col xs="auto">
                             <Button type="submit" variant="success" className="mb-1">Submit</Button>{' '}
                           </Col>
                        </Row>
                     </Form>
                        
                 
                 
                  </div>
                  <CartWidget/>
           </nav>
           
      
        </header>


    )
}

export default nav