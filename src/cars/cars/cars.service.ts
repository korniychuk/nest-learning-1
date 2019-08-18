import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {

  test() {
    return 'hello';
  }

  public msg(): string {
    return 'test mag';
  }

}
