import { Body, Controller, Get, Param, Post } from '@nestjs/common';

export class CreateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;

  get nameUpper(): string {
    return this.name;
  }

}

@Controller('cats')
export class CatsController {

  // @Post()
  // @HttpCode(204)
  // public create(): string {
  //   return 'This action adds new cat';
  // }

  // @Get()
  // public findAll(): string {
  //     return 'This action returns all cats';
  // }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    console.log('create', createCatDto);
    return `This action adds a new cat: ${createCatDto.constructor.name}: ${createCatDto instanceof CreateCatDto}: ` +
      JSON.stringify(createCatDto, null, 2)
      ;
  }

  @Get('ab[\\w\\d]+cd')
  public findAll(): string {
    return 'This method uses a wildcard';
  }

  @Get('one/:id')
  public getOne(@Param('id') id): string {
    return `Get one by ID: ${id}`;
  }

}
