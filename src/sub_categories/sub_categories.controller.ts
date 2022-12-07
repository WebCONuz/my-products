import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateSubCategory } from './dto/create-subcategory.dto';
import { UpdateSubCategoryDto } from './dto/update-subcategory.dto';
import { SubCategory } from './sub_categories.model';
import { SubCategoriesService } from './sub_categories.service';

@ApiTags('Sub Categories')
@Controller('subcategories')
export class SubCategoriesController {
  constructor(private readonly subCategoriesService: SubCategoriesService) {}

  // Create SubCategory Controller
  @ApiOperation({ summary: 'Sub Kategoriya yaratish' })
  @ApiResponse({ status: 201, type: SubCategory })
  @Post()
  create(@Body() createSubCategory: CreateSubCategory) {
    return this.subCategoriesService.create(createSubCategory);
  }

  // Get All SubCategory Controller
  @ApiOperation({ summary: 'Barcha sub kategoriyalar' })
  @ApiResponse({ status: 200, type: [SubCategory] })
  @Get()
  getAll() {
    return this.subCategoriesService.getAll();
  }

  // Get One SubCategory Controller
  @ApiOperation({ summary: "ID bo'yicha bitta sub kategoriya" })
  @ApiResponse({ status: 200, type: SubCategory })
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.subCategoriesService.getOne(id);
  }

  // Update SubCategory Controller
  @ApiOperation({ summary: 'Sub Kategoriyani yangilash' })
  @ApiResponse({ status: 200, type: SubCategory })
  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateSubCategoryDto: UpdateSubCategoryDto,
  ) {
    return this.subCategoriesService.update(id, updateSubCategoryDto);
  }

  // Delete SubCategory Controller
  @ApiOperation({ summary: "Sub Kategoriyani o'chirish" })
  @ApiResponse({ status: 200, type: SubCategory })
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.subCategoriesService.deleteCategory(id);
  }
}
