import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateProductUseCase {
   execute(ProductData: { nombre: string; precio: number }) {
    return {
        nombre_producto: ProductData.nombre,
        precio: ProductData.precio,
        mensaje: "Producto creado con éxito",
    }
    
  }
}