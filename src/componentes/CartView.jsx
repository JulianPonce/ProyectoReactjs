import { useContext } from "react";
import { contexto } from "../contexto/CartContext";
import { firestore } from '../firebase';
import Button from 'react-bootstrap/Button';
import firebase from "firebase/app"
import "firebase/firestore"
import Form from 'react-bootstrap/Form'
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import FormControl from "react-bootstrap/esm/FormControl"
import { useState } from "react";


const CartView = () => {
  const { precioTotal, carrito, eliminarProducto,clear } = useContext(contexto);
  
      const[Nombre,setNombre]= useState(" ")
      const[Email,setEmail]=useState(" ")
      const saveNombre = (event) =>setNombre(event.target.value)
      const saveEmail = (event) =>setEmail(event.target.value)





    
          const ordenFuncion = () => {
            if ((Email !== " ")&&(Nombre !== " ")) {      
                  const collection =firestore.collection("ordenes")
                  const orden = { Nombre,Email, Productos:carrito ,PrecioTotal:precioTotal(), Fecha:firebase.firestore.Timestamp.fromDate(new Date()) }
                  precioTotal()
                  const query = collection.add(orden)
                  query.then((docRef)=>{
                      console.log(docRef);
                    },[])
                      alert("gracias por su compra de" +precioTotal()+"$")
                      clear()
                }
                
                else{
                  alert("Complete sus datos para confirmar la compra")
                }
              }
      
    
      return (
      
          <div  className = "carrito">
          <h1>carrito</h1>
          {carrito.map((element) => {
            return (
              <>
              <div  key={element.id} className = "itemcarro" >
                  <h3 className= "titulocarro">{element.titulo}</h3>
                  <div className="bodycarrito">
                  <img src={element.imagenUrl} alt="" width="200px" height="250px" />
                  </div>
                  <h3 className= "titulocarro">Precio: {element.precio}$ x {element.cantidad} (cantidad)</h3>
                 <Button className="borrarItem" onClick={() => eliminarProducto(element.id)} variant="outline-dark">Borrar item</Button>{' '}
              </div>
        
            </>
            )
          
        })}
       
        {precioTotal() !== 0 ?(
          <>
          
            <div className="footercarro">
            
              <Form onSubmit={ordenFuncion} >
                      <Row className="align-items-center">
                                <Col xs="auto">
                                    <Form.Label  htmlFor="inlineFormInput" visuallyHidden>
                                    Nombre
                                    </Form.Label>
                                    <Form.Control onChange={saveNombre} className="mb-1" id="inlineFormInput" placeholder="Nombre"/>
                                </Col>
                                
                                <Col xs="auto">
                                  
                                    <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                    Apellido
                                    </Form.Label>
                                    <FormControl onChange={saveEmail} className="mb-1" id="inlineFormInputGroup" placeholder="Email" />
                                  
                                </Col>
                          
                      </Row>
              </Form>
                
                <Button onClick={() => clear()}variant="outline-danger">Vaciar carrito</Button>{' '}
                <Button onClick={() => ordenFuncion(precioTotal())} variant="success">Comprar</Button>{' '}
                <h3>Total:{precioTotal()} $</h3>   
            
          
          </div> 
          </>
            ):(
              <h1>No hay productos en su orden</h1>

            )}
          </div>
    
  );
};
export default CartView;