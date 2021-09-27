import { createContext, useState } from "react";

export const contexto = createContext()

export const { Provider } = contexto

const CustomProvider = ({children}) => {

    const [carrito,setCarrito] = useState([])
    
    
    
    
    const agregarAlCarro = (productoAgregado) =>{
        
    
            if(isInCart(productoAgregado.id)){
                const upDateCart = [...carrito];
                
                upDateCart.forEach((element)=>{
                if(productoAgregado.id === element.id){
                    element.cantidad += productoAgregado.cantidad
                }
                setCarrito(upDateCart)
                })
                }else{
                    setCarrito([...carrito,productoAgregado])
                }
            console.log(carrito);
    }

         
    const eliminarProducto = (productoid) => {
    
        const carritoFilter = carrito.filter(producto => producto.id !== productoid)
        return setCarrito(carritoFilter)

    }


    const isInCart = (id)=>{

        return carrito.find(producto=>producto.id === id)
    }

    const clear = () =>{

        setCarrito([])

    }
    
    const cantidadTotal = () =>
        carrito.reduce((acum, element) => (acum += element.cantidad), 
        0)
  
    
    const precioTotal = () =>
        carrito.reduce((acum, element) => (acum += element.cantidad * element.precio), 
        0)
   
    console.log(precioTotal());

    
         
    
    return(
             <Provider value={{ carrito,agregarAlCarro,clear,eliminarProducto,precioTotal,cantidadTotal}}>
             {children}
             </Provider>
             )

}

export default CustomProvider