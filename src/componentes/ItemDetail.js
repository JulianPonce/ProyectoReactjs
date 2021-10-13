import ItemCount from "./itemCount";
import { useContext, useState } from "react";
import { contexto } from "../contexto/CartContext";
import {Link} from 'react-router-dom'
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
    <div className="detail">
      
      
      <div className="detail">
      <h3> {element.titulo}</h3>
      <img src={element.imagenUrl} alt="" width="200px" height="200px" />
      
      </div>
      
      <div className="detalles">
      <p>{element.descripcion}</p>
      </div>
     
      <div className="preciocount">
      <h3>Precio:{element.precio}$</h3>
        {finish === true ? (
       <> 
       
       <div className="botones">
       <Button variant="light"><Link to="/carrito"> Ir al carrito </Link></Button> {' '}
       <Button variant="light"><Link to="/"> Home </Link></Button> {' '}
           </div>
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
