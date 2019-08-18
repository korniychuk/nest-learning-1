import {
  Body,
  Controller,
  ForbiddenException,
  Get, HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post, UsePipes,
} from '@nestjs/common';
import * as Joi from '@hapi/joi';
import { CatsService } from './cats.service';
import { JoiValidationPipe } from './joi-validation.pipe';
import { CreateCatDto } from './create-cat.dto';
import { ValidationPipe } from './validation.pipe';
import { CreateCat2Dto } from './create-cat-2.dto';

const info: {[key in keyof CreateCatDto]: any} = {
  age: Joi.number().required().min(18).max(30),
  breed: Joi.string().required(),
  name: Joi.string().required().min(10).max(15),
};
const createCatSchema = Joi.object().keys(info);
// tslint:disable-next-line:max-classes-per-file
@Controller('cats')
export class CatsController {

  public constructor(
    private readonly $cats: CatsService,
  ) { }

  @HttpCode(204)
  @Post()
  @UsePipes(new JoiValidationPipe(createCatSchema))
  public async create(@Body() createCatDto: CreateCatDto) {
    this.$cats.create(createCatDto);
  }

  @HttpCode(204)
  @Post('2')
  // @UsePipes(new ValidationPipe())
  // @UsePipes(ValidationPipe)
  public async create2(@Body(ValidationPipe) createCatDto: CreateCat2Dto) {
  // public async create2(@Body() createCatDto: CreateCat2Dto) {
  // public async create2(@Body(new ValidationPipe()) createCatDto: CreateCat2Dto) {
    this.$cats.create(createCatDto);
  }

  // @Get()
  // public findAll(): string {
  //     return 'This action returns all cats';
  // }

  // @Post()
  // async create(@Body() createCatDto: CreateCatDto) {
  //   console.log('create', createCatDto);
  //   return `This action adds a new cat: ${createCatDto.constructor.name}: ${createCatDto instanceof CreateCatDto}: ` +
  //     JSON.stringify(createCatDto, null, 2)
  //     ;
  // }

  @Get('ab[\\w\\d]+cd')
  public findAll(): string {
    return 'This method uses a wildcard';
  }

  @Get('one/:id')
  public getOne(@Param('id') id): string {
    return `Get one by ID: ${id}`;
  }

  @Get('throw')
  public async throwTestException(): Promise<never> {
    // throw new HttpException({some: 'sd', message: 'hello'}, 777);
    // throw new Error(`Something went wrong. cats.controller.ts:50`);
    // throw new HttpException({
    //   status: HttpStatus.FORBIDDEN,
    //   error: 'This is a custom message',
    // }, HttpStatus.FORBIDDEN);
    // throw new ForbiddenException(`Something went wrong. cats.controller.ts:64`);
    throw new ForbiddenException();
  }

}
