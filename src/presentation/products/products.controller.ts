import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateProductUseCase } from '../../application/products/use-cases/create-product.usecase';
import { ListProductsUseCase } from '../../application/products/use-cases/list-products.usecase';
import { Product } from '../../domain/products/entities/product.entity';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly createProductUseCase: CreateProductUseCase,
    private readonly listProductsUseCase: ListProductsUseCase,
  ) {}

  @Post()
  async create(@Body() body: { nombre: string; precio: number }): Promise<Product> {
    return await this.createProductUseCase.execute(body);
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return await this.listProductsUseCase.execute();
  }
}
