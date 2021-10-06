import {useState} from 'react';
import Button from 'react-bootstrap/Button';

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
                <Button onClick={suma} variant="secondary">+</Button>{' '}
                <Button onClick={resta} variant="secondary">-</Button>{' '}
                <Button onClick={agregar} variant="success">agregar</Button>{' '}
            </div>
    );
}
 
export default ItemCount;