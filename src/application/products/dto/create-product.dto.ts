import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from "class-validator";


export class CreateProductDto {

    //@ApiProperty() le dice a Swagger que este campo debe mostrarse en el body.
    //@IsString(), @IsNumber(), etc. validan el tipo de dato automáticamente.
    
    @ApiProperty({
        description: 'Nombre del producto',
        example: 'Laptop HP Pavilion',
    })
    @IsNotEmpty()
    nombre: string;

    @ApiProperty({
        description: 'Precio del producto',
        example: 1500.00,
    })
    @IsNumber()
    @IsNotEmpty()
    precio: number;


}