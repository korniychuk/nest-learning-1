import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { CarsModule } from './cars/cars.module';
import { TestFilter } from './test.filter';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PhotoModule } from '@app/photo/photo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'nestjs_learning',
      password: '111',
      database: 'nestjs_learning_db_1',

      synchronize: true,
      // entities: ['./**/*.entity{.js,.ts}'],
      // logging: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    CarsModule,
    AuthModule,
    UsersModule,
    PhotoModule,
  ],
  controllers: [AppController, CatsController],
  providers: [
    AppService,
    CatsService,
    // {
    //   provide: APP_FILTER,
    //   useClass: TestFilter,
    // },
  ],
})
export class AppModule {}
