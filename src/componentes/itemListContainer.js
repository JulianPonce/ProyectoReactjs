import ItemCount from "./itemCount"
import ItemList from  "./itemList"


const itemListContainer = () => {
    return (
        <>
          <ItemList/>
          <ItemCount stock={4} initial={1} onAdd={(contador)=>{console.log(contador);}}/>
        
         </>
      );
}
 
export default itemListContainer;