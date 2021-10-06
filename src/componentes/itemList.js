
import Item from  "./item"





export const ItemList = ({element}) => {

            return (
                element.length === 0 ? (
                    <h1> cargando... </h1>
                ):( <div className="container"> {
                    element.map((element) => (<Item element={element}/>))
                } </div>
                )
)}

export default ItemList

/*<li key={element.id}>{element.categoria}</li>*/