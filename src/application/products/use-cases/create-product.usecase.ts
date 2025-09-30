import { Injectable } from '@nestjs/common';
import { ProductRepositoryImpl } from '../../../infrastructure/products/repositories/product.repository.impl';
import { Product } from '../../../domain/products/entities/product.entity';

@Injectable()
export class CreateProductUseCase {
  constructor(private readonly productRepository: ProductRepositoryImpl) {}

  async execute(data: { nombre: string; precio: number }): Promise<Product> {
    const product = new Product(0, data.nombre, data.precio);
    return await this.productRepository.create(product);
  }
}
