import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSubCategory } from './dto/create-subcategory.dto';
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

  // Get One SubCategory Controller
  async getOne(id: number) {
    return this.subCategoryRepository.findOne({
      where: { sub_category_id: id },
      include: { all: true },
    });
  }
}
