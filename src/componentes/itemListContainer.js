import { useEffect, useState } from 'react';
import ItemCount from "./itemCount";
import ItemList from  "./itemList";
import {useParams} from "react-router-dom";
import { firestore } from '../firebase';



const ItemListContainer = () => {
  
  const [element,setElement]=useState([])
  const {id} = useParams()
  const {category} = useParams()
 
  useEffect(()=>{    
    const db = firestore
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