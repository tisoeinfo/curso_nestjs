import { Controller, Get, Post, Body, applyDecorators } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateProductUseCase } from '../../application/products/use-cases/create-product.usecase';
import { ListProductsUseCase } from '../../application/products/use-cases/list-products.usecase';
import { Product } from '../../domain/products/entities/product.entity';
import { CreateProductDto } from '../../application/products/dto/create-product.dto';
import { ProductsSwagger } from '../docs/products.swagger';

@ApiTags('Products') //  agrupa los endpoints bajo "Products" en Swagger
@Controller('products')
export class ProductsController {
  constructor(
    private readonly createProductUseCase: CreateProductUseCase,
    private readonly listProductsUseCase: ListProductsUseCase,
  ) { }

  @Post()
  @applyDecorators(...ProductsSwagger.create)
  async create(@Body() body: CreateProductDto): Promise<Product> {
    return await this.createProductUseCase.execute(body);
  }

  @Get()
  @applyDecorators(...ProductsSwagger.findAll)
  async findAll(): Promise<Product[]> {
    return await this.listProductsUseCase.execute();
  }
}
