import { useContext } from "react";
import { contexto } from "../contexto/CartContext";
import {useParams} from "react-router-dom";
import { firestore } from '../firebase';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import InputGroup from "react-bootstrap/esm/InputGroup"
import FormControl from "react-bootstrap/esm/FormControl"


const CartView = () => {
  const { precioTotal, carrito, eliminarProducto,clear } = useContext(contexto);
  const {id} = useParams()
  
  
  const ordenFuncion = () => {


        const db = firestore
        const collection =firestore.collection("ordenes")
        
        const orden = { productos:carrito ,PrecioTotal:precioTotal() }

        
        const query = collection.add(orden)
        query.then((docRef)=>{
          
          console.log(docRef);

          },[id])
          
      alert("gracias por su compra de" +precioTotal()+"$")
          clear()
    
    
        }
    return (
      <>
      <div className = "carrito">
          <h1>carrito</h1>
          
          {carrito.map((element) => {
            return (
              <>
              <div className = "itemcarro" >
                  <h3 className= "titulocarro">{element.titulo}</h3>
                  
              <div className="bodycarrito">
               
                
                  <img src={element.imagenUrl} alt="" width="200px" height="250px" />
             
              </div>
              <h3 className= "titulocarro">Precio: {element.precio}$</h3>
                 <Button className="borrarItem" onClick={() => eliminarProducto(element.id)} variant="outline-dark">Borrar item</Button>{' '}
              </div>
        
            </>
            )
          
        })}
   


          {precioTotal() !== 0 ?(
         <>
          <div className="footercarro">
          <Button onClick={() => clear()}variant="outline-danger">Vaciar carrito</Button>{' '}
          <Button onClick={() => ordenFuncion(precioTotal())} variant="success">Comprar</Button>{' '}
          <h3>Total:{precioTotal()} $</h3>   
          </div>
         

          </>
          ):(
             <h1>No hay productos en su orden</h1>

          )}

      </div>
     
   
   
    </>
  );
};

export default CartView;