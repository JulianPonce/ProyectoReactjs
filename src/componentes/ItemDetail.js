import ItemCount from "./itemCount";
import { useContext, useState } from "react";
import { contexto } from "../contexto/CartContext";
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Container } from "react-dom";
import ListGroup from "react-bootstrap/esm/ListGroup"



const ItemDetail = ({ element,productoAgregado }) => {
  
  const [finish, setFinish] = useState(false);
  const { agregarAlCarro } = useContext(contexto);

  const onAdd = (contador) => {
    const productoAgregado = { ...element, cantidad: contador };
    agregarAlCarro(productoAgregado);

    alert("se agregaron" + contador + "productos");
    
  };
 
  return (
    <div className="detail">
      
      
      <div className="detail">
      <img src={element.imagenUrl} alt="" width="200px" height="250px" />
      <h3> {element.titulo}</h3>
      </div>
      
      <div className="detalles">
      <p>{element.descripcion}</p>
      </div>
     
      <div className="preciocount">
      <h3>Precio:{element.precio}$</h3>
        {finish === true ? (
       <> <button><Link to="/carrito"> Ir al carrito </Link></button>
       <button><Link to="/"> Home </Link></button>
       </>
       ) : (
        <ItemCount
          props={agregarAlCarro}
          stock={4}
          initial={1}
          onAdd={onAdd}
          setFinish={setFinish}
        />
      )}
   
   </div>
 
    
    </div>
  );
};
export default ItemDetail;
