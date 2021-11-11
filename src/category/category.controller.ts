import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { SuccessResponseDto } from '../common/dto/success-response.dto';
import { ApiDataResponse } from '../common/decorators/api-data-response.decorator';
import { CategoryInfoDto } from './dto/category-info.dto';

@ApiTags('Category')
@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @ApiOperation({
    summary: '(권한: 없음) 카테고리 리스트',
    description: '카테고리 리스트를 불러옵니다.',
  })
  @ApiDataResponse(CategoryInfoDto)
  @Get('')
  async getCategories(): Promise<SuccessResponseDto<any>> {
    const categories = await this.categoryService.getCategories();
    return new SuccessResponseDto<any>({ data: categories });
  }
}
