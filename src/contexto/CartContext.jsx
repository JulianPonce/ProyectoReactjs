import { createContext, useState } from "react";

export const contexto = createContext()

const {provider} = contexto

const CustomProvider = (children) => {

    const [carrito,setCarrito] = useState([])
    
    
    
    
 const agregarAlCarro = (producto,cantidad) =>{
        
    
    if(isInCart(producto.id)){
        const upDateCart = [...producto];
           
        upDateCart.forEach((producto)=>{
           if(producto.item.id === producto.id){
            producto.cantidad += cantidad
           }

        })
        }else{
            setCarrito([...carrito,producto])
        }
    
}

const eliminarProducto = (productoid) => {
   
    const carritoFilter = carrito.filter(producto => producto.item.id !== productoid)
    return setCarrito(carritoFilter)

}


const isInCart = (id)=>{

    return carrito.find(producto=>producto.id === id)
}

const clear = () =>{

       setCarrito([])

}
const contexto = {
    carrito,agregarAlCarro
}
   
    
    return(
                    <provider valur={contexto,clear,eliminarProducto}>
                    {children}
                    </provider>
                    )

}

export default CustomProvider()