import ItemDetail from "./ItemDetail"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router"



const  ItemDetailContainer = ()=>{

    

    const [producto, setProducto] = useState({})

    const {id} = useParams();

    const PromiseEjercicio = () =>{
                
                    return new Promise((resolver, reject) => {

                            setTimeout(()=>{

                                    resolver([

                                        { id: "1", destacado: true, categoria: "remera", precio: "800" },

                                        { id: "2", destacado: true, categoria: "pantalon", precio: "1200" },

                                        { id: "3", destacado: false, categoria: "campera", precio: "3000" },

                                        { id: "4", destacado: true, categoria: "gorra", precio: "450" }            

                                        ])

                                },2000);
                    })
                
    };

        useEffect(()=>{
            PromiseEjercicio().then(res=>setProducto(res.find(element=>element.id===id)))
        },[id])

            return(

                    
                    <ItemDetail producto={producto}/>

              

                    )

    

}
    
export default  ItemDetailContainer

                