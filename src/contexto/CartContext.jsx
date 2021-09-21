import { createContext, useState } from "react";

export const contexto = createContext()

export const { Provider } = contexto

const CustomProvider = ({children}) => {

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
    
    
    const precioTotal = () => carrito.reduce((acum, element) => (acum += element.cantidad * element.item.precio), 0)
   
    console.log(precioTotal);
         
    
    return(
                    <Provider value={{ carrito,agregarAlCarro,clear,eliminarProducto,precioTotal}}>
                    {children}
                    </Provider>
                    )

}

export default CustomProvider