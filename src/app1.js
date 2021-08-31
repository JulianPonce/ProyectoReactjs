
import Nav from "./nav"

import ItemListContainer from "./componentes/itemListContainer"

import ItemDetailContainer from "./componentes/ItemDetailContainer"

const app = ()=>{
 


      return(
              <>
                
                <Nav nombre="Julian" apellido="Ponce"/>
                
                
                
                <ItemListContainer/>
                
                <ItemDetailContainer/>
                </>
        )
}

export default app