import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  NotFoundException,
  PipeTransform,
} from '@nestjs/common';
import { PhotoService } from './photo.service';

@Injectable()
export class PhotoByIdPipe implements PipeTransform {

  public constructor(
    private readonly $photo: PhotoService,
  ) {}

  public async transform(value: any, metadata: ArgumentMetadata) {
    const photoId = +value;
    if (isNaN(photoId)) {
      throw new BadRequestException('Invalid ID');
    }

    const photo = await this.$photo.findOneById(photoId);

    if (!photo) { throw new NotFoundException(); }

    return photo;
  }

}
