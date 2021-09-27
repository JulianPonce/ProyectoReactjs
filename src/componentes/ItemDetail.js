import ItemCount from "./itemCount";
import { useContext, useState } from "react";
import { contexto } from "../contexto/CartContext";
import {Link} from 'react-router-dom'

const ItemDetail = ({ element,item }) => {
  const [finish, setFinish] = useState(false);
  const { agregarAlCarro } = useContext(contexto);

  const onAdd = (contador) => {
    const item = { ...element, cantidad: contador };
    agregarAlCarro(item);

    alert("se agregaron" + contador + "productos");
    
  };
 
  return (
    <div>
      <h1 key={element.id}>
        {element.titulo} {element.precio}$
      </h1>
     
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
