import { useEffect, useState } from 'react';
import ItemList from  "./itemList";
import {useParams} from "react-router-dom";
import { firestore } from '../firebase';



const ItemListContainer = () => {
  
  const [element,setElement]=useState([])
  
  const {category} = useParams()
 
  useEffect(()=>{    
   
    const collection = firestore.collection("Productos")
    const query = collection.get()
  
    
    
    if(category){

      

      collection.where("categoria","==",category).get()

      .then((snapshot)=>{

        setElement(snapshot.docs.map(doc=>({...doc.data(),id:doc.id})))

     })

    
    
    }else{
      
      query.then((snapshot)=>{
             
        setElement(snapshot.docs.map(doc=>({...doc.data(),id:doc.id})))
     })
    }
  
  },[category])
    
  return (
        <>
          
          <ItemList element={element}/>
         
        </>
      );
}
 
export default ItemListContainer;