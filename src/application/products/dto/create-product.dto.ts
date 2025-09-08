import { IsNotEmpty, IsNumber } from "class-validator";


export class CreateProductDto {

    @IsNotEmpty()
    nombre: string;

    @IsNumber()
    precio: number;


}