import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Request, Response } from 'express';
import { CarsService } from './cars/cars.service';

@Catch()
export class CarsFilterFilter<T extends Error> implements ExceptionFilter {

  public constructor(
    private readonly $cars: CarsService,
  ) {}

  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const req = ctx.getRequest<Request>();
    const res = ctx.getResponse<Response>();

    res
      .status(777)
      .json({
        fail: this.$cars.msg(),
        message: exception.message,
      });
  }
}
