import {
  BadRequestException,
  Controller,
  Get,
  HttpException, Inject,
  Param,
  UseFilters,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsFilterFilter } from '../cars-filter.filter';
import { ParseIntPipe } from '../../parse-int.pipe';

// @UseFilters(CarsFilterFilter)
@Controller('cars')
export class CarsController {

  public constructor(
    private readonly $cars: CarsService,
    @Inject('AliasMy')
    private readonly $aliasMy: any,
  ) {
    console.log('My', $aliasMy);
  }

  // @UseFilters(CarsFilterFilter)
  @Get(':id')
  getOneById(@Param('id', ParseIntPipe) carId) {
    if (carId === 0) {
      throw new BadRequestException('Super Fail. ID should not be 0');
    }

    return this.$cars.test();
  }

}
