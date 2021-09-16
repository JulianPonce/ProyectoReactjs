import ItemCount from "./itemCount";
import { useContext, useState } from "react";
import { CartContext } from "../contexto/CartContext";


const ItemDetail = ({element}) => {
    
    const [finish, setFinish] = useState(false)
    const {addItem,clear,cart,removeItem} = useContext(CartContext)

    const onAdd = (contador) => {
        alert("se agregaron"  + contador  + "productos")
        addItem(element, contador)
    }

 
   
   
    return(
        
        <>
        <li key={element.id}>{element.categoria} {element.precio}$</li>
        {finish === true ? <button > Ir al carrito </button> : <ItemCount  stock={4} initial={1} onAdd={onAdd} setFinish={setFinish} />}
        <button onClick={clear}> Borrar items </button> 
        </>
    
        )

}
export default ItemDetail