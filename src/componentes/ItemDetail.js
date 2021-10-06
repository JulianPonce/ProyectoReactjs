import ItemCount from "./itemCount";
import { useContext, useState } from "react";
import { contexto } from "../contexto/CartContext";
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Container } from "react-dom";


const ItemDetail = ({ element,productoAgregado }) => {
  
  const [finish, setFinish] = useState(false);
  const { agregarAlCarro } = useContext(contexto);

  const onAdd = (contador) => {
    const productoAgregado = { ...element, cantidad: contador };
    agregarAlCarro(productoAgregado);

    alert("se agregaron" + contador + "productos");
    
  };
 
  return (
    <div >
    
    
       <Card style={{height: '14rem' }}>
       <Card.Img variant="center"  width="180x" height="200px"  src={element.imagenUrl}/>
       <Card.Title>{element.titulo} Precio:{element.precio}$ </Card.Title>
    
        <Card.Body  className="detail">
    
   
       
       <div className="descripcion">
        <Card.Text>
          <h4>Descripcion: {element.descripcion}</h4>
     
        </Card.Text>
      </div>
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
