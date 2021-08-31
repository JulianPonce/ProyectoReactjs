/* eslint-disable react-hooks/exhaustive-deps */
import ItemDetail from './ItemDetail'
import React, { useEffect, useState } from 'react'




const  ItemDetailContainer = ()=>{
    
    const [item, setItem] = useState({})

    const promesa = new Promise ((resolver, reject)=>{        
     
    
        resolver({id: 1, destacado: true, categoria: "remera", precio: "900"})  
             
    })


        useEffect(() => {
           
          promesa.then(res=>setItem(res))
        },[])
        

            return(
                    <>
                    <ItemDetail element={item}/>
                    </>
                    )
    
}
    
export default  ItemDetailContainer

                