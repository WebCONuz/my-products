import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateSubCategory } from './dto/create-subcategory.dto';
import { SubCategoriesService } from './sub_categories.service';

@Controller('subcategories')
export class SubCategoriesController {
  constructor(private readonly subCategoriesService: SubCategoriesService) {}

  // Create SubCategory Controller
  @Post()
  create(@Body() createSubCategory: CreateSubCategory) {
    return this.subCategoriesService.create(createSubCategory);
  }

  // Get All SubCategory Controller
  @Get()
  getAll() {
    return this.subCategoriesService.getAll();
  }

  // Get One SubCategory Controller
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.subCategoriesService.getOne(id);
  }
}
