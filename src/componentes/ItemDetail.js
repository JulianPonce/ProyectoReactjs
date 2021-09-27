import ItemCount from "./itemCount";
import { useContext, useState } from "react";
import { contexto } from "../contexto/CartContext";
import {Link} from 'react-router-dom'

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
      <div> {element.imagenUrl}</div>
      <div key={element.id}>
        <h1> {element.titulo} {element.precio}$</h1>
      </div>
     
      {finish === true ? (
        <button><Link to="/carrito"> Ir al carrito </Link></button>
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
  );
};
export default ItemDetail;
