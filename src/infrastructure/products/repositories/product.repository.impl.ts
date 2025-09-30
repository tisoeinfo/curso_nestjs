import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../../domain/products/repositories/product.repository';
import { Product } from '../../../domain/products/entities/product.entity';
import { MySQLService } from '../../database/mysql.service';


@Injectable()
export class ProductRepositoryImpl implements ProductRepository {

    constructor(private readonly db: MySQLService) { }

    async findAll(): Promise<Product[]> {
        const [rows] = await this.db.getPool().query('SELECT * FROM products');
        return (rows as any[]).map((row) => new Product(row.id, row.nombre, row.precio),);
    }

    async create(product: Product): Promise<Product> {
        const [result]: any = await this.db.getPool().query('INSERT INTO products (nombre, precio) VALUES (?, ?)', [product.nombre, product.precio,]);
        return new Product(result.insertId, product.nombre, product.precio);
    }
}
