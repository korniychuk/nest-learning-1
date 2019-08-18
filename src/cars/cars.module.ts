import { Injectable, Module, Provider } from '@nestjs/common';
import { CarsService } from './cars/cars.service';
import { CarsController } from './cars/cars.controller';
import { APP_FILTER } from '@nestjs/core';
import { CarsFilterFilter } from './cars-filter.filter';

@Injectable()
class My {
}

const AliasMyProvider: Provider = {
  provide: 'AliasMy',
  useExisting: My,
};

@Module({
  providers: [
    CarsService,
    My,
    AliasMyProvider,
    // {
    //   provide: APP_FILTER,
    //   useClass: CarsFilterFilter,
    // },
  ],
  controllers: [CarsController],
})
export class CarsModule {}
