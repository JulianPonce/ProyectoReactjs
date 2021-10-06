import {useState} from 'react';


const  ItemCount = ({initial,stock,onAdd, setFinish}) => {
    let [contador, setContador] = useState(initial);
    
    const suma = () =>{
      if(contador<stock){
        setContador(contador+1)
    }
    }
    
    const resta = () =>{
        if(contador>1){
        setContador(contador-1)

    }
    }

    const agregar = () =>{
       if(stock>0){
        onAdd(contador)
        
        
       }
       setFinish(true)
     
    }
    
    return (  
            <div id="contador">
                <p>Cantidad:{contador}</p>
                <button onClick={suma}>+</button>
                <button onClick={resta}>-</button>
                <button onClick={agregar}>agregar</button>
              
            </div>
    );
}
 
export default ItemCount;