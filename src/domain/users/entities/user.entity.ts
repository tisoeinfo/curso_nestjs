
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users') // tabla users
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  email: string;
}


//Esto es como estaba antes v2, nuestras pruebas con los arreglos []
// export class User {

//     public readonly id: number;
//     public nombre: string;
//     public email: string;
    

//     constructor(id: number, nombre: string, email: string) {
//         this.id = id;
//         this.nombre = nombre;
//         this.email = email;

//     }

// }


// Esto es como estaba antes v1
// class User {
//   constructor(
//     public readonly id: number,
//     public nombre: string,
//     public email: string
//   ) {}
// }
