import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Photo } from './photo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PhotoService {

  public constructor(
    @InjectRepository(Photo)
    private readonly $$photo: Repository<Photo>,
  ) {}

  public findAll(): Promise<Photo[]> {
    return this.$$photo.find();
  }

  public findOneById(photoId: number): Promise<Photo | undefined> {
    return this.$$photo.findOne(photoId);
  }

  public create(): Promise<Photo> {
    const photo = new Photo();
    photo.name = 'Me and Bears';
    photo.description = 'I am near polar bears';
    photo.filename = 'photo-with-bears.jpg';
    photo.views = 1;
    photo.isPublished = true;

    return this.$$photo.save(photo);
  }

}
