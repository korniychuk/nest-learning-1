import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';

@Injectable()
export class CatsService {

  public create(createCatDto: CreateCatDto) {
  }

}
