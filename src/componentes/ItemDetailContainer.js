import ItemDetail from "./ItemDetail"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { firestore } from '../firebase';


const  ItemDetailContainer = ()=>{
    const [element, setElement] = useState({})
    const {id} = useParams();

      useEffect(()=>{
            //PromiseEjercicio().then(res=>setElement(res.find(element=>element.id===id)))
              const db = firestore
              const collection = firestore.collection("Productos")
              const element = collection.doc(id);
               
            element.get(id).then((querySnapshot) => {
                  const data = {
                    id: querySnapshot.id,
                    ...querySnapshot.data(),
                  }
                  setElement([data]);
                });
              },[id])

            return(

                    <>
                    <ItemDetail element={element}/>
                    </> 
              

                    )

    

}
    
export default  ItemDetailContainer

                