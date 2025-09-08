import { Injectable } from '@nestjs/common';

@Injectable()
export class ListProductsUseCase {
  execute(): string {
    return "Listamos todos los productos";
  }
}