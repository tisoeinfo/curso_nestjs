export class User {
    constructor(
        public readonly id: number,
        public nombre: string,
        public email: string,
    ) { }

    // Ejemplo de lógica de negocio:
    cambiarEmail(nuevoEmail: string) {
        this.email = nuevoEmail;
    }
}
