import { Person } from './person.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: './db.sqlite',
    synchronize: true,
    entities: [Person],
  }), TypeOrmModule.forFeature([Person])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
