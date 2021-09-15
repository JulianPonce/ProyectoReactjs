import ItemCount from "./itemCount";
import { useContext, useState } from "react";
import { CartContext } from "../contexto/CartContext";


const ItemDetail = ({element}) => {
    
    const [finish, setFinish] = useState(false)
    const {addItem} = useContext(CartContext)

    const onAdd = (contador) => {
        alert("se agregaron"  + contador  + "productos")
    }

    return(
        
        <>
        <li key={element.id}>{element.categoria} {element.precio}$</li>
        {finish === true ? <button > Ir al carrito </button> : <ItemCount addItem={addItem} stock={4} initial={1} onAdd={onAdd} setFinish={setFinish} />}
        </>
    
        )

}
export default ItemDetail