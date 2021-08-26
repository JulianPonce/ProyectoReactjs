const promesa = new Promise((res, rec) => {

    setTimeout(() => {

        console.log("pedido completado")
        res()
    })
}, 10000)


promesa.then(() => {

    console.log("Compra aceptada");
})
promesa.catch(() => {

    console.log("Se produjo un error");
})
promesa.then(() => {

    console.log("Gracias por su compra");
})