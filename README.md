# e-commerce

## Proyecto final para el curso de React JS de Coderhouse

## Es un proyecto e-commerce de ventas de Ropa.

## La aplicación se levanta con un npm start

## Librerías públicas utilizadas en el proyecto:



##### firebase: para tener una base de datos en la nube, poder guardar datos desde el proyecto y luego consultar los mismos. Link: https://console.firebase.google.com/project/e-commerce-coder-75950/overview

##### react: es el framework en donde se contruyó este proyecto. Link:https://www.npmjs.com/package/create-react-app

##### bootstrap y react-bootstrap: se los agregó para incluir en el navbar un dropdowns con opciones para seleccionar por categorias. Link:https://react-bootstrap.github.io/

##### react-router-dom: se lo incluyó en el proyecto para tener un sistema de rutas y así navegar por las distintas páginas. Link:https://reactrouter.com/web/guides/quick-start

## Pages(Secciones) del proyecto:

##### itemDetail: aqui se muestra un solo producto.

##### CartView: aqui se muestran los productos que fueron agregados al carrito.



## Components del proyecto:

##### Nav: es el menu. Aparece en todas las páginas del proyecto.

##### ItemListContainer: es el contenedor del Home.

##### ItemList: en el home se accede a los datos de firebase desde aquí. Estos son enviados como props.

##### Item: recibe props del ItemList. Item se encarga de la estructura de cada item en la Home.

##### ItemDetailContainer: es el contenedor del detalle del producto. A la vez, accede a la base de datos para buscar el item que coincide con el id de la url.

##### ItemDetail: recibe props del ItemDetailContainer. Aquí se muestra la estructura del detalle del producto.

##### itemCount es un componente que se encarga de contar cuantos productos seleccionamos para agregar al  carrito.

##### cartwidget se genero el icono del carrito dentro de nav
  
#####  CartView es la visualizacion del carrito donde generamos la ordenFuncion donde generamos una orden de compra subida a firebase(fecha,productos,usuario).

#### Se genero una hoja de css llamda estilos.css para aplicar estilos a la app





## Context

### Se creó solamente un context llamado CartContext. Dentro del mismo se encuentran:

##### carrito y setCarrito: se encargan del estado del carrito. cart va a visualizar todos los elementos que se agregaron al carrito.

##### agregarAlCarrito es una función para agregar elementos al carrito.

##### updateItem es una función que se encarga, dentro del carrito, de actualizar la cantidad de un productos.

##### CantidadTotal es para identificar si se repite un producto dentro del carritp

##### PrecioTotal es una función que devuelve el precio total del carrito.

##### eliminarProducto  es una función que se encarga de eliminar el producto seleccionado del carrito.

##### clear es una función que borra todos los productos del carrito.