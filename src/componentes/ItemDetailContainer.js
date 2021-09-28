import ItemDetail from "./ItemDetail"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { firestore } from '../firebase';


const  ItemDetailContainer = ()=>{
    const [producto, setElement] = useState({})
    const {id} = useParams();

      useEffect(()=>{
            //PromiseEjercicio().then(res=>setElement(res.find(element=>element.id===id)))
              const db = firestore
              const collection = firestore.collection("Productos")
              const element = collection.doc(id).get();
               
               element.then((prod) => {
                  const data = {
                    id: prod.id,
                    ...prod.data(),
                  }
                  setElement(data);
                });
              },[id])

            return(

                    <>
                    <ItemDetail element={producto}/>
                    </> 
              

                    )

    

}
    
export default  ItemDetailContainer

                