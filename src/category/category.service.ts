import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../entities/category.entity';
import { Repository } from 'typeorm';
import { CategoryInfoDto } from './dto/category-info.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async getCategories(): Promise<CategoryInfoDto[]> {
    const categories = await this.categoryRepository.find();
    return categories.map((el) => new CategoryInfoDto(el));
  }
}
