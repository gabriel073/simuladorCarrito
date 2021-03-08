const aire = 37700;
const cafetera = 12500;
const tv = 85700;
const notbook = 120000;
const heladera = 200000;

let cuotas = 0;
let productos;
let sumandoProductos = 0;

while (productos != "esc") {

    productos = prompt("Elije un producto para agregar al Carrito: \n 1- Aire Acondicionado 5000 frig. \n 2- Cafetera Express Oster \n 3- T.V. Smart 60' Samsung \n 4- Notbook Acer 500 Gb \n 5- Heladera Wirpool 500 lts.");


    switch (productos) {
        case "1":
            console.log("Ingresando Aire Acondicionado 5000 frig. al Carrito... ");
            document.write("Ingresando Aire Acondicionado 5000 frig. al Carrito... \n");

            break;
        case "2":
            console.log("Ingresando Cafetera Express Oster al Carrito... ");
            document.write("Ingresando Cafetera Express Oster al Carrito... ");
            break;
        case "3":
            console.log("Ingresando T.V. Smart 60' Samsung al Carrito... ");
            document.write("Ingresando T.V. Smart 60' Samsung al Carrito... ");
            break;
        case "4":
            console.log("Ingresando  Notbook Acer 500 Gb al Carrito... ");
            document.write("Ingresando  Notbook Acer 500 Gb al Carrito... ");
            break;
        case "5":
            console.log("Ingresando Heladera Wirpool 500 lts. al Carrito... ");
            document.write("Ingresando Heladera Wirpool 500 lts. al Carrito... ");
            break;

        default:
            console.log("Ingreso un dato incorrecto...")
            alert("Dato Ingresado Incorrecto, Vuelva a intentarlo...")
            break;
    }



    if (productos == 1) {
        cuotas = prompt("El total del Producto seleccionado cuesta...$ " + aire + "\n Ingrese cant de Cuotas..");
        console.log("Su plan de pago constara en " + cuotas + " pagos de $" + (aire / cuotas));
        document.write("<br> Su plan de pago constara en " + cuotas + " pagos <br> de $ " + (aire / cuotas).toFixed(2) + "<br>");
    } else if (productos == 2) {
        cuotas = prompt("El total del Producto seleccionado cuesta...$ " + cafetera + "\n Ingrese cant de Cuotas..");
        console.log("Su plan de pago constara en " + cuotas + " pagos de $" + (cafetera / cuotas));
        document.write("<br> Su plan de pago constara en " + cuotas + " pagos <br> de $ " + (cafetera / cuotas).toFixed(2) + "<br>");
    } else if (productos == 3) {
        cuotas = prompt("El total del Producto seleccionado cuesta...$ " + tv + "\n Ingrese cant de Cuotas..");
        console.log("Su plan de pago constara en " + cuotas + " pagos de $" + (tv / cuotas));
        document.write("<br> Su plan de pago constara en " + cuotas + " pagos <br> de $ " + (tv / cuotas).toFixed(2) + "<br>");
    } else if (productos == 4) {
        cuotas = prompt("El total del Producto seleccionado cuesta...$ " + notbook + "\n Ingrese cant de Cuotas..");
        console.log("Su plan de pago constara en " + cuotas + " pagos de $" + (notbook / cuotas));
        document.write("<br> Su plan de pago constara en " + cuotas + " pagos <br> de $ " + (notbook / cuotas).toFixed(2) + "<br>");
    } else if (productos == 5) {
        cuotas = prompt("El total del Producto seleccionado cuesta...$ " + heladera + "\n Ingrese cant de Cuotas..");
        console.log("Su plan de pago constara en " + cuotas + " pagos de $" + (heladera / cuotas));
        document.write("<br> Su plan de pago constara en " + cuotas + " pagos <br> de $ " + (heladera / cuotas).toFixed(2) + "<br>");
    }


    function sumarProducto() {

        if (productos == 1) {
            sumandoProductos = sumandoProductos + aire;
        } else if (productos == 2) {
            sumandoProductos = sumandoProductos + cafetera;
        } else if (productos == 3) {
            sumandoProductos = sumandoProductos + tv;
        } else if (productos == 4) {
            sumandoProductos = sumandoProductos + notbook;
        } else if (productos == 5) {
            sumandoProductos = sumandoProductos + heladera;
        }
        console.log("total acumulado $" + sumandoProductos);
        document.write("total acumulado en Carrito $" + sumandoProductos.toFixed(2) + "<br>");
    }
    sumarProducto();
    productos = prompt("desea seguir agregando al carrito?, o tipee 'esc', para salir");
    if (productos == "esc") {
        alert("Gracias por Utilizar nuestro Carrto Online, Vuelva Pronto!! \n A continuacion se Detallara Su compra!");
    }
}