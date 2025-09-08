import { Injectable } from '@nestjs/common';

@Injectable()
export class FindProductsUseCase {
    execute(id: string): string {
        return `El ID del Producto es ${id}`;
    }
}