import CardWidget from "./cardWidget"

const nav =({nombre,apellido})=>{

    return(
        <header id = "header">
       
           <nav class="navbar ">
                     <h1>e-commerce</h1>
                        <button class="btn btn-outline-success me-2" type="button">categoraias</button>
                        <button class="btn btn-outline-success me-2" type="button">contacto</button>
                        <p>Hola {nombre} {apellido}</p>
                        <CardWidget/>
           
           </nav>
           
      
        </header>


    )
}

export default nav