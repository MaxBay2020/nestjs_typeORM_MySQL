import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456root',
    database: 'nestjs_typeorm_mysql',
    entities: [__dirname + '/typeORM/entities/*{.ts,.js}'],
    synchronize: true,
  }), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
