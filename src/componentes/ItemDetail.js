const ItemDetail = ({element}) => {


    return(
        <li key={element.id}>{element.categoria} {element.precio}$</li>
    )

}
export default ItemDetail