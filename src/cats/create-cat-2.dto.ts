import { IsString, IsInt } from 'class-validator';

export class CreateCat2Dto {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;

  @IsString()
  readonly breed: string;
}
