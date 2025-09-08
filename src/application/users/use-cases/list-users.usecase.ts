import { Injectable } from '@nestjs/common';

@Injectable()
export class ListUsersUseCase {
  execute(): string {
    return "Listamos todos los usuarios";
  }
}
