import Item from  "./item"





export const ItemList = ({element}) => {

            return (
                <>
               {element.length === 0 ? (
                   
                    <h1 key="{spinner}"> cargando... </h1>
                    
                ):(
                
                    <div className="container"> {
                        element.map(element => (<Item key={element.id} element={element}/>))
                        } 
                    </div>
              
                )}
                </>
)}

export default ItemList

