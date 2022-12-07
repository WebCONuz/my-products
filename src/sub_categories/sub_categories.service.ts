import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSubCategory } from './dto/create-subcategory.dto';
import { UpdateSubCategoryDto } from './dto/update-subcategory.dto';
import { SubCategory } from './sub_categories.model';

@Injectable()
export class SubCategoriesService {
  constructor(
    @InjectModel(SubCategory) private subCategoryRepository: typeof SubCategory,
  ) {}

  // Create SubCategory Service
  async create(createSubCategory: CreateSubCategory) {
    return this.subCategoryRepository.create(createSubCategory);
  }

  //Get All SubCategory Service
  async getAll() {
    return this.subCategoryRepository.findAll({ include: { all: true } });
  }

  // Get One SubCategory Service
  async getOne(id: number) {
    return this.subCategoryRepository.findOne({
      where: { sub_category_id: id },
      include: { all: true },
    });
  }

  // Update SubCategory Service
  async update(id: number, updateSubCategoryDto: UpdateSubCategoryDto) {
    return this.subCategoryRepository.update(updateSubCategoryDto, {
      where: { sub_category_id: id },
      returning: true,
    });
  }

  // Delete SubCategory Service
  async deleteCategory(id: number) {
    return await this.subCategoryRepository.destroy({
      where: { sub_category_id: id },
    });
  }
}
