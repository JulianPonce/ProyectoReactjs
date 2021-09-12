import ItemCount from "./itemCount";
import { useState } from "react";



const ItemDetail = ({element}) => {
    
    const [finish, setFinish] = useState(false)


    const onAdd = (contador) => {
        alert("se agregaron" + " " + contador + " " + "productos")
    }

    return(
        
        <>
        <li key={element.id}>{element.categoria} {element.precio}$</li>
        {finish === true ? <button > Ir al carrito </button> : <ItemCount stock={4} initial={1} onAdd={onAdd} setFinish={setFinish} />}
        </>
    
        )

}
export default ItemDetail