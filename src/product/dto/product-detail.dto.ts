import { Image } from '../../entities/image.entity';
import { Option } from '../../entities/option.entity';
import { ApiProperty } from '@nestjs/swagger';

export class ProductDetailDto {
  @ApiProperty({ description: '제품 id' })
  id: number;

  @ApiProperty({ description: '도축일' })
  butcheredDate: string;

  @ApiProperty({ description: '제품 가격' })
  price: number;

  @ApiProperty({ description: '제품 무게' })
  grams: number;

  @ApiProperty({ description: '100g당 가격' })
  pricePer100g: number;

  @ApiProperty({ description: '무항생제 여부' })
  isOrganic: boolean;

  @ApiProperty({ description: '썸네일' })
  thumbnail: string;

  @ApiProperty({ description: '상세 이미지' })
  images: Image[];

  @ApiProperty({ description: '제품 옵션' })
  options: Option[];

  constructor(product: any) {
    this.id = +product.id;
    this.butcheredDate = product.butcheredDate;
    this.price = +product.price;
    this.grams = +product.grams;
    this.pricePer100g = Math.round((+product.price / +product.grams) * 100);
    this.isOrganic = product.isOrganic;
    this.thumbnail = product.thumbnail;
    this.images = product.images;
    this.options = product.options;
  }
}
