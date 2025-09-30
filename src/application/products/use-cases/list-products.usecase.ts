import { Injectable } from '@nestjs/common';
import { ProductRepositoryImpl } from '../../../infrastructure/products/repositories/product.repository.impl';
import { Product } from '../../../domain/products/entities/product.entity';

@Injectable()
export class ListProductsUseCase {
  constructor(private readonly productRepository: ProductRepositoryImpl) {}

  async execute(): Promise<Product[]> {
    return await this.productRepository.findAll();
  }
}
