import { Module } from '@nestjs/common';
import { ProductsController } from './product.controller';
import { ListProductsUseCase } from 'src/application/products/use-cases/list-products.usecase';
import { CreateProductUseCase } from 'src/application/products/use-cases/create-product.usecase';

@Module({
  controllers: [ProductsController],
  providers: [ListProductsUseCase, CreateProductUseCase] 
})
export class ProductsModule {}
