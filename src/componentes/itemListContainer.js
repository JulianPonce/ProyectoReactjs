import { useEffect, useState } from 'react';
import ItemCount from "./itemCount";
import ItemList from  "./itemList";
import {useParams} from "react-router-dom";

const ItemListContainer = () => {
  
  const [element,setElement]=useState([])
  const {category} = useParams()
    
  
const promiseEjercicio = () =>{
    return new Promise((resolver, reject) => {
  
      setTimeout(()=>{
          resolver([
              { id: "1", destacado: true, categoria: "remera", precio: "800" },
              { id: "2", destacado: true, categoria: "pantalon", precio: "1200" },
              { id: "3", destacado: false, categoria: "campera", precio: "3000" },
              { id: "4", destacado: true, categoria: "gorra", precio: "450" }, 
              { id: "5", destacado: true, categoria: "remera", precio: "800" },
              { id: "6", destacado: true, categoria: "pantalon", precio: "1200" },
              { id: "7", destacado: false, categoria: "campera", precio: "3000" },
              { id: "8", destacado: true, categoria: "gorra", precio: "450" },           
            ])
      },3000);
  
  })
};

  useEffect(()=>{    
    promiseEjercicio().then(res=>{
      if(!category){setElement(res)}
      else{let filtrar=res.filter(element=>element.categoria===category)
      setElement(filtrar) 
     }
    })  
  },[category])
    





  return (
        <>
          
          <ItemList element={element}/>
          
        
         

        </>
      );
}
 
export default ItemListContainer;