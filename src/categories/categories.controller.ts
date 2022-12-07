import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Category } from './categories.model';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/add-category.dto';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoryService: CategoriesService) {}

  // Add Category Controller
  @ApiOperation({ summary: 'Kategoriya yaratish' })
  @ApiResponse({ status: 201, type: Category })
  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  // Get all Categories Controller
  @ApiOperation({ summary: 'Barcha kategoriyalar' })
  @ApiResponse({ status: 200, type: [Category] })
  @Get()
  getAll() {
    return this.categoryService.getAll();
  }

  // Update Category Controller
  @ApiOperation({ summary: "ID bo'yicha bitta kategoriya" })
  @ApiResponse({ status: 200, type: Category })
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.categoryService.getOne(id);
  }

  // Update Category Controller
  @ApiOperation({ summary: 'Kategoriyani yangilash' })
  @ApiResponse({ status: 200, type: Category })
  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() createCategoryDto: CreateCategoryDto,
  ) {
    return this.categoryService.updateCategory(createCategoryDto, id);
  }

  // Delete Category Controller
  @ApiOperation({ summary: "Kategoriyani o'chirish" })
  @ApiResponse({ status: 200, type: Category })
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.categoryService.deleteCategory(id);
  }
}
