import { ApiProperty } from '@nestjs/swagger';
import { Category } from '../../entities/category.entity';

export class CategoryInfoDto {
  @ApiProperty({ description: 'id' })
  id: number;

  @ApiProperty({ description: '이름' })
  name: string;

  @ApiProperty({ description: '이미지 URL' })
  image: string;

  constructor(category: Category) {
    this.id = category.id;
    this.name = category.name;
    this.image = category.image;
  }
}
