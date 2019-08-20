import { Controller, Get, Param, Post } from '@nestjs/common';
import { Photo } from './photo.entity';
import { PhotoService } from './photo.service';
import { PhotoByIdPipe } from './photo-by-id.pipe';

@Controller('photos')
export class PhotoController {

  public constructor(
    private readonly $photo: PhotoService,
  ) {}

  @Get()
  public findAll(): Promise<Photo[]> {
    return this.$photo.findAll();
  }

  @Get(':id')
  public findOne(@Param('id', PhotoByIdPipe) photo: Photo) {
   return photo;
  }

  @Post()
  public create(): Promise<Photo> {
    return this.$photo.create();
  }

}
