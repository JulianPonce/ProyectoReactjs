import { useEffect, useState } from 'react';
import ItemCount from "./itemCount";
import ItemList from  "./itemList";
import {useParams} from "react-router-dom";
import { firestore } from '../firebase';

const ItemListContainer = () => {
  



  const [element,setElement]=useState([])
 
  const {id} = useParams()
  
 

  useEffect(()=>{    
   
   
    const db = firestore
    const collection = firestore.collection("Productos")

    const query = collection.get()
   
   
   
   
    query.then((snapshot)=>{
             
      
      setElement(snapshot.docs.map(doc=>({...doc.data(),id:doc.id})))
      
      //const docs = snapshot.docs

      //const Productos = []

   /*docs.forEach((doc)=>{

        const docSnapshot = doc
        //console.log(docSnapshot.id);
        //console.log(docSnapshot.data());
          const Producto_id = {...docSnapshot.data(),id:docSnapshot.id}
          Productos.push(Producto_id)
      })*/

          //setElement(Productos);
    })
   
   
   
   
   
   
   
    /*promiseEjercicio().then(res=>{
      if(!categoria){setElement(res)}
      else{let filtrar=res.filter(element=>element.categoria===categoria)
      setElement(filtrar) 
     }
    })*/  
  },[id])
    
  return (
        <>
          
          <ItemList element={element}/>
         
        
         

        </>
      );
}
 
export default ItemListContainer;