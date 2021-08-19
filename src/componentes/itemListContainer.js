import ItemCount from "./itemCount";



const itemListContainer = () => {
    return (
        
        <ItemCount stock={4} initial={1} onAdd={(contador)=>{console.log(contador);}}/>

      );
}
 
export default itemListContainer;