import { createContext,useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {


       
    const [cart,setCart]= useState([])
   
    const addItem = (item , quantity) => {
        
        if(isInCart(item.id)){
  
         const upDateCart = [...cart];
           
            upDateCart.forEach((element)=>{
               if(element.item.id === item.id){
                   element.quantity += quantity
               }

            })


        }else{
        setCart([...cart,{item,quantity}])
        }
    
    }
     console.log(cart);
    
    
     const isInCart = (id) => {
       
        return cart.find(element =>element.item.id === id)
    
    }
    
    const clear = () => setCart([])


    const removeItem = ( itemId) => {

        const cartFilter = cart.filter(element => element.item.id !== itemId)
        return setCart(cartFilter)
    }
    
    return(
    
       <CartContext.Provider value ={{addItem,clear, removeItem,cart}}>
           {children}
        </CartContext.Provider >  
    )


}
