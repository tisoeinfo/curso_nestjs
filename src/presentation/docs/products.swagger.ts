// src/presentation/docs/products.swagger.ts
import { ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { CreateProductDto } from '../../application/products/dto/create-product.dto';

export const ProductsSwagger = {
    create: [
        ApiOperation({ summary: 'Crea un nuevo producto' }),
        ApiBody({ type: CreateProductDto }),
        ApiResponse({ status: 201, description: 'Producto creado correctamente' }),
    ],
    findAll: [
        ApiOperation({ summary: 'Lista todos los productos' }),
        ApiResponse({
            status: 200,
            description: 'Listado de productos',
            schema: {
                example: [
                    { id: 1, nombre: 'Laptop HP Pavilion', precio: 1500 },
                    { id: 2, nombre: 'Monitor LG 24"', precio: 700 },
                ],
            },
        }),
    ],
};
