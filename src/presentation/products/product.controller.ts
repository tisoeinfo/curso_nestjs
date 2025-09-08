import { Controller, Get, Post, Body } from '@nestjs/common';

import { ListProductsUseCase } from '../../application/products/use-cases/list-products.usecase';
import { CreateProductUseCase } from '../../application/products/use-cases/create-product.usecase';
import { FindProductsUseCase } from '../../application/products/use-cases/find-product.usecase';
import { CreateProductDto } from '../../application/products/dto/create-product.dto';

@Controller('products')
export class ProductsController {


    constructor(
        private readonly listProductsUseCase: ListProductsUseCase,
        private readonly createProductUseCase: CreateProductUseCase,
                
    ) { }

    @Get()
    findAll(): string {
        return this.listProductsUseCase.execute();
    }

    @Post()
    create(@Body() body: CreateProductDto) {
        return this.createProductUseCase.execute(body);
    }



}
