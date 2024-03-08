/* Obtiene el titulo de un libro EJEMPLO
class nombredeClase {
    constructor (parametro1, parametro2, parametroN) {
        this.propiedad1 = parametro1;
        this.propiedad2 = parametro2;
        this.propiedadN = this.propiedadN;
    }
}
Termina el ejemplo */

//Clase Libro

class Libro{
    constructor(precio, titulo, autor){
        const propiedades = {_titulo: titulo, _autor: autor, _percio: precio};
        const _private = new WeakMap();
        _private.set(this, {propiedades});

        Object.defineProperties(this, {
                titulo: {
                get(){
                    return _private.get(this).propiedades['_titulo'];
                },
                set(newTitulo){
                    _private.get(this).propiedades['_titulo']= newTitulo;
                }
            },
            autor:{
                get(){
                    return _private.get(this).propiedades['_autor'];

                },
                set(newAutor){
                    _private.get(this).propiedades['_autor']= newAutor;
                }
            },
            precio: {
                get(){
                    return _private.get(this).propiedades['_precio'];

                },
                set(newPrecio){
                    _private.get(this).propiedades['_precio']= newPrecio;
                }
            }   
})};
    obtenerTodosLosDatos(){
        console.log(`Titulo: ${this.titulo}, Autor: ${this.autor}, Precio: ${this.precio}`)
    }

}

//Creación Clase Cómic

class Comic extends Libro{
    //Constructor clase Comic
    constructor(precio, titulo, autor, ilustradores){
        super(precio,titulo, autor);
        this.ilustradores = ilustradores;
    }
    //Agregar Ilustrador
    agregarIlustrador(ilustradores){
        this.ilustradores.push(ilustradores);
    }
    //Obtener Datos
    obtenerTodosLosDatos(){
        super.obtenerTodosLosDatos();
        console.log(`Ilustradores: ${this.ilustradores}`);
    }
}

//Creación de Carrito de Compras

class CarritodeCompras{
    constructor(){
        this.productos = [];
    }
    //Agregar Producto
    agregarProducto(cantidad, precio){
        this.productos.push(...Array(cantidad).fill(precio));
    }
    //Mostrar Producto
    mostrarProducto(){
        console.log(this.productos);
    }
    //Calculadora
    calcTotal(){
        return this.productos
        .map(precio => precio)
        .reduce((ac, precio) => ac + precio, 0);
    }
    //Imprimir Ticket
    imprimirTicket(){
        console.log(`Total a pagar ${this.calcTotal()}`);
    }
}

//Uso de Clases

const carrito = new CarritodeCompras();
const comic1 = new Comic(150, "El clan del oso cavernario", "José Agustín", ["Ana Sofía"]);
const libro1 = new Libro(400, "La sombra", "Alondra Jimenez");
const comic2 = new Comic(250, "El gato", "Luis Ernesto");
const libro2 = new Libro(250, "La cacería", "Ana Sofía");

//Agregar Productos al Carrito

carrito.agregarProducto(2, comic1.precio);
carrito.agregarProducto(3, libro1.precio);
carrito.agregarProducto(1, comic2.precio);
carrito.agregarProducto(4, libro2.precio);

//Mostrar Productos del Carrito

carrito.mostrarProducto();
carrito.imprimirTicket();

//Obtener Datos de Productos Comprados

comic1.obtenerTodosLosDatos();
libro1.obtenerTodosLosDatos();
comic2.obtenerTodosLosDatos();
libro2.obtenerTodosLosDatos();
