import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { CreateProductUseCase } from '../../application/products/use-cases/create-product.usecase';
import { ListProductsUseCase } from '../../application/products/use-cases/list-products.usecase';
import { ProductRepositoryImpl } from '../../infrastructure/products/repositories/product.repository.impl';
import { DatabaseModule } from '../../infrastructure/database/database.module';

@Module({
  imports: [DatabaseModule], // ahora se trae MySQLService desde aquí
  controllers: [ProductsController],
  providers:
    [
      CreateProductUseCase,
      ListProductsUseCase,
      ProductRepositoryImpl
    ],
})
export class ProductsModule { }
