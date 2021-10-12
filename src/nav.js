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
                  <Dropdown.Item href="/categoria/remera"><Link to="/categoria/remera" >Remeras</Link></Dropdown.Item>
                  <Dropdown.Item href="/categoria/pantalon"><Link to="/categoria/pantalon">Pantalon</Link></Dropdown.Item>
                  <Dropdown.Item href="/categoria/campera"><Link to="/categoria/campera">Campera</Link></Dropdown.Item>
                  <Dropdown.Item href="/categoria/gorra"><Link to="/categoria/gorra">Gorra</Link></Dropdown.Item>   
                  </DropdownButton>
                </div> 
                        <div>
                        <Form>
              <Row className="align-items-center">
                <Col xs="auto">
                  <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                   Email
                  </Form.Label>
                  <Form.Control
                    className="mb-4"
                    id="inlineFormInput"
                    placeholder="Nombre"
                  />
                </Col>
                <Col xs="auto">
                  <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                    Nombre
                  </Form.Label>
                  <InputGroup className="mb-4">
                    <InputGroup.Text>@</InputGroup.Text>
                    <FormControl id="inlineFormInputGroup" placeholder="Email" />
                  </InputGroup>
                </Col>
                <Col xs="sm">
                  <Button type="submit" className="mb-4">
                    Submit
                  </Button>
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