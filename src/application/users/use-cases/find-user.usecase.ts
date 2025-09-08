import { Injectable } from '@nestjs/common';

@Injectable()
export class FindUserUseCase {
  execute(id: string): string {
    return `El ID del Usuario es ${id}`;
  }
}
