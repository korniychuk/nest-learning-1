import * as Joi from '@hapi/joi';
import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

export class JoiValidationPipe implements PipeTransform {

  public constructor(
    private readonly schema: object,
  ) {}

  transform(value: any, metadata: ArgumentMetadata) {
    const { error } = Joi.validate(value, this.schema);
    if (error) {
      throw new BadRequestException({
        error: error.details,
        message: 'Invalid Data',
      });
    }

    return value;
  }
}
