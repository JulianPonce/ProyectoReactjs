import { useContext } from "react";
import { contexto } from "../contexto/CartContext";
import {useParams} from "react-router-dom";
import { firestore } from '../firebase';
import { useEffect, useState } from 'react';




const CartView = () => {
  const { precioTotal, carrito, eliminarProducto,clear } = useContext(contexto);
  const {id} = useParams()
  
  
  const ordenFuncion = () => {


        const db = firestore
        const collection =firestore.collection("ordenes")
        
        const orden = {
          productos:carrito
        }

        const query = collection.add(orden)
        query.then((docRef)=>{
          
          console.log(docRef);

          },[id])

    }
  return (
    <>
     <div className = "carrito">
        <h1>carrito</h1>
        
        {carrito.map((element) => {
          return (
            <>
            <div className = "itemcarro" >
            <img src={element.imagenUrl} alt="" width="200px" height="250px" />
            <h3>{element.titulo}</h3>
            <button onClick={() => eliminarProducto(element.id)}>Borrar item</button>
            </div>
           </>
           )
        
      })}
   
    </div>
     <div className="vaciar">
    <button onClick={() => clear()}>vaciar Carrito</button> <h3>Total:{precioTotal()}</h3>   
    <button onClick={() => ordenFuncion()}>Comprar</button>
    </div>
    </>
  );
};

export default CartView;