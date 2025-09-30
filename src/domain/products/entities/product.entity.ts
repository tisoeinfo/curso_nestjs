export class Product {

    public readonly id: number;
    public nombre: string;
    public precio: number;
    

    constructor(id: number, nombre: string, precio: number) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;

    }

}