import { Module } from '@nestjs/common';
import { MySQLService } from './mysql.service';

@Module({
  providers: [MySQLService],
  exports: [MySQLService], // Exportamos para que otros módulos lo usen
})
export class DatabaseModule {}
