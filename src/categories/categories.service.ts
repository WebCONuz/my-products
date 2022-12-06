import { Injectable } from '@nestjs/common';
import { Category } from './categories.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCategoryDto } from './dto/add-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category) private categoryRepository: typeof Category,
  ) {}

  // Add Category Service
  async create(createCategoryDto: CreateCategoryDto) {
    return await this.categoryRepository.create(createCategoryDto);
  }

  // Get All Categories Service
  async getAll() {
    return await this.categoryRepository.findAll({ include: { all: true } });
  }

  // Update Category Service
  async updateCategory(createCategoryDto: CreateCategoryDto, id: number) {
    return await this.categoryRepository.update(createCategoryDto, {
      where: { category_id: id },
      returning: true,
    });
  }
}
