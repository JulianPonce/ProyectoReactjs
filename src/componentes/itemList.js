import React, { useEffect, useState } from 'react'
import Item from './item'


const promiseEjercicio = () => {

    return new Promise((resolver, reject) =>
    {

        setTimeout(()=>{
            resolver([
                { id: 1, destacado: true, categoria: 'remera', precio: '800' },
                { id: 2, destacado: true, categoria: 'pantalon', precio: '1200' },
                { id: 3, destacado: false, categoria: 'campera', precio: '3000' },
                { id: 4, destacado: true, categoria: 'gorra', precio: '450' }

            ])},3000
        );

    });
}



export const ItemList = () => {

    const [dataToShow, setData] = useState([]);



    useEffect(() => {
        promiseEjercicio().then((data) => {

            let dest = data.filter(producto =>  producto.destacado === true )
            setData(dest)
        })


    }, [])
    return (
        dataToShow === 0 ? ( 
            <h1> cargando... </h1>
        ) : ( <ul> {
                dataToShow.map((element) => (
                   
                    <Item element={element}/>                  
                
           
                )) 
        } </ul>
        )
    )

}

export default ItemList

/*<li key={element.id}>{element.categoria}</li>*/