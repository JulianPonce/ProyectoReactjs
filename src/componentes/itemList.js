import React, { useEffect, useState } from "react"
import Item from  "./item"





export const ItemList = ({element}) => {

            return (
                element.length === 0 ? (
                    <h1> cargando... </h1>
                ):( <ul> {
                    element.map((element) => (<Item element={element}/>))
                } </ul>
                )
)}

export default ItemList

/*<li key={element.id}>{element.categoria}</li>*/