import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { CarsModule } from './cars/cars.module';
import { APP_FILTER } from '@nestjs/core';
import { TestFilter } from './test.filter';

@Module({
  imports: [CarsModule],
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
