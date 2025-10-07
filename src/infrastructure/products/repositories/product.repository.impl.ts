import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../../domain/products/repositories/product.repository';
import { Product } from '../../../domain/products/entities/product.entity';
import { MySQLService } from '../../database/mysql.service';


@Injectable()
export class ProductRepositoryImpl implements ProductRepository {

    constructor(private readonly db: MySQLService) { }

    async findAll(): Promise<Product[]> {
        const rowsx = await this.db.getPool().query('SELECT * FROM products');
        //MYSQL devuelve un array con 2 cosas, pero solo me interes rows (ahi estan los datos de la consulta)
        const rows = rowsx[0];
        return (rows as any[]).map((row) => new Product(row.id, row.nombre, row.precio),);
    }

    async create(product: Product): Promise<Product> {
        const [result]: any = await this.db.getPool().query('INSERT INTO products (nombre, precio) VALUES (?, ?)', [product.nombre, product.precio,]);
        return new Product(result.insertId, product.nombre, product.precio);
    }
}
