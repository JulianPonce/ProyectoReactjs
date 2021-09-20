import { useState } from "react"
import Nav from "./nav"
import ItemListContainer from "./componentes/itemListContainer"
import ItemDetailContainer from "./componentes/ItemDetailContainer"
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import  CustomProvider  from "./contexto/CartContext"


const app = () => {



             return ( 
     
                    <BrowserRouter>
                        <CustomProvider> 
                                    <Nav/>
                                    <Switch>
                                    <Route path="/" component={ItemListContainer} exact/>
                                    <Route path="/categoria/:category" component={ItemListContainer}/>
                                    <Route path="/item/:id" component={ItemDetailContainer}/>
                                    </Switch>
                        </CustomProvider>
                    </BrowserRouter>
       
            )
}

export default app