import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsOptional } from 'class-validator';

const categories = ['all', 'pork', 'beef', 'chicken', 'seafood'];
const sortOptions = ['id', 'sales', 'reviews', 'price-desc', 'price-asc'];

export class ProductListRequestDto {
  @ApiProperty({ description: '카테고리' })
  @IsOptional()
  @IsIn(categories)
  category: string;

  @ApiProperty({ description: '정렬 조건' })
  @IsOptional()
  @IsIn(sortOptions)
  sort: string;
}
