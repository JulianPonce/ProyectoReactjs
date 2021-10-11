# e-commerce

## Proyecto final para el curso de React JS de Coderhouse

## Es un proyecto e-commerce de ventas de Ropa.

## La aplicación se levanta con un npm start

## Librerías públicas utilizadas en el proyecto:



##### firebase: para tener una base de datos en la nube, poder guardar datos desde el proyecto y luego consultar los mismos. Link: https://github.com/firebase/firebase-js-sdk

##### react: es el framework en donde se contruyó este proyecto. Link: https://github.com/facebook/react

##### bootstrap y react-bootstrap: se los agregó para incluir en el navbar dos dropdowns con opciones para seleccionar. Link: https://github.com/react-bootstrap/react-bootstrap

##### react-router-dom: se lo incluyó en el proyecto para tener un sistema de rutas y así navegar por las distintas páginas. Link: https://github.com/ReactTraining/react-router

## Pages(Secciones) del proyecto:

##### Home: aqui se listan todos los productos. Se puede filtrar por categoría.

##### Detail: aqui se muestra un solo producto.

##### CartView: aqui se muestran los productos que fueron agregados al carrito.



## Components del proyecto:

##### Navbar: es el menu. Aparece en todas las páginas del proyecto.

##### ItemListContainer: es el contenedor del Home.

##### ItemList: en el home se accede a los datos de firebase desde aquí. Estos son enviados como props.

##### Item: recibe props del ItemList. Item se encarga de la estructura de cada item en la Home.

##### ItemDetailContainer: es el contenedor del detalle del producto. A la vez, accede a la base de datos para buscar el item que coincide con el id de la url.

##### ItemDetail: recibe props del ItemDetailContainer. Aquí se muestra la estructura del detalle del producto.

##### CartConteiner: es el contenedor del Cart. Aqui se encuentra el formulario para finalizar la compra.

##### CartItemsList: se encarga de acceder al CartContext y buscar los elementos que fueron agregados al carrito.

##### CartItem: recibe props del CartItemsList. Aqui se muestra la estructura del los items agregados al carrito.






## Context

### Se creó solamente un context llamado CartContext. Dentro del mismo se encuentran:

##### cart y setCart: se encargan del estado del carrito. cart va a visualizar todos los elementos que se agregaron al carrito.

##### addItem es una función para agregar elementos al carrito.

##### updateItem es una función que se encarga, dentro del carrito, de actualizar la cantidad de un productos.

##### itemCount es una función que se encarga de contar cuantos productos hay en el carrito.

##### totalPrice es una función que devuelve el precio total del carrito.

##### removeItem es una función que se encarga de eliminar el producto seleccionado del carrito.

##### clear es una función que borra todos los productos del carrito.