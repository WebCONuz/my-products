import { Injectable } from '@nestjs/common';
import { Category } from './categories.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCategoryDto } from './dto/add-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category) private categoryRepository: typeof Category,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    return await this.categoryRepository.create(createCategoryDto);
  }

  async getAll() {
    return await this.categoryRepository.findAll({ include: { all: true } });
  }
}
