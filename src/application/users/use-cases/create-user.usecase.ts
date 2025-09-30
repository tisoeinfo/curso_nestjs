import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from '../../../domain/users/entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';


@Injectable()
export class CreateUserUseCase {
  constructor(
    @InjectRepository(User)
    //Cuando usas TypeORM, NestJS ya te da un Repository<User>
    //Ya no usas la interfaz UserRepository porque TypeORM ya cumple ese contrato
    private readonly userRepository: Repository<User>) { }

  async execute(dto: CreateUserDto): Promise<User> {

    // Crear entidad a partir del DTO,  Aquí ya no usamos new User(...).
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(dto.password, salt);

    const user = this.userRepository.create({
      username: dto.username,
      password: hashedPassword,
    });
    // Guarda el usuario en la base de datos
    return this.userRepository.save(user);
  }
}
