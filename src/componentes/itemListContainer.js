import { useEffect, useState } from "react";
import ItemCount from "./itemCount";
import ItemList from  "./itemList";


const itemListContainer = () => {
  
  const [element,setElement]=useState([])

    useEffect(()=>{

    console.log("premosa 2 segundos ");
 
    setTimeout(()=>{
                setElement([      
                { id: 1, destacado: true, categoria: 'remera', precio: '800' },
                { id: 2, destacado: true, categoria: 'pantalon', precio: '1200' },
                { id: 3, destacado: false, categoria: 'campera', precio: '3000' },
                { id: 4, destacado: true, categoria: 'gorra', precio: '450' }
              ])
    },2000)

  },[])





  return (
        <>
          <ItemList element={element}/>
          <ItemCount stock={4} initial={1} onAdd={(contador)=>{console.log(contador);}}/>
        
         </>
      );
}
 
export default itemListContainer;