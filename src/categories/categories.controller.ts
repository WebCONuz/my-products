import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/add-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoryService: CategoriesService) {}

  // Add Category Controller
  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  // Get all Categories Controller
  @Get()
  getAll() {
    return this.categoryService.getAll();
  }

  // Update Category Controller
  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() createCategoryDto: CreateCategoryDto,
  ) {
    return this.categoryService.updateCategory(createCategoryDto, id);
  }

  // Delete Category Controller
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.categoryService.deleteCategory(id);
  }
}
