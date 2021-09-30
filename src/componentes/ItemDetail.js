import ItemCount from "./itemCount";
import { useContext, useState } from "react";
import { contexto } from "../contexto/CartContext";
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

const ItemDetail = ({ element,productoAgregado }) => {
  
  const [finish, setFinish] = useState(false);
  const { agregarAlCarro } = useContext(contexto);

  const onAdd = (contador) => {
    const productoAgregado = { ...element, cantidad: contador };
    agregarAlCarro(productoAgregado);

    alert("se agregaron" + contador + "productos");
    
  };
 
  return (
    <div>
      <Card style={{ width: '14rem' }}>
        <Card.Img variant="top" src={element.imagenUrl}/>
        <Card.Body>
      <Card.Title>{element.titulo} </Card.Title>
      <Card.Text>
        Precio:{element.precio}$
      </Card.Text>
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


    </Card.Body>
    </Card>
     
   
    </div>
  );
};
export default ItemDetail;
