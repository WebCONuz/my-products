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

  // Get All Categories Service
  async getOne(id) {
    return await this.categoryRepository.findAll({
      where: { category_id: id },
      include: { all: true },
    });
  }

  // Update Category Service
  async updateCategory(updateCategoryDto: CreateCategoryDto, id: number) {
    return await this.categoryRepository.update(updateCategoryDto, {
      where: { category_id: id },
      returning: true,
    });
  }

  // Delete Category Service
  async deleteCategory(id: number) {
    return await this.categoryRepository.destroy({
      where: { category_id: id },
    });
  }
}
