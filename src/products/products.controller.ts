import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { QueryDto } from './dto/query.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // Add Product Controller
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  // Get Products By Query Strings Controller
  @Get()
  getQuery(@Query() query: QueryDto) {
    return this.productsService.getQueryProduct(query);
  }

  // Update Product Controller
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.productsService.getOne(id);
  }

  // Update Product Controller
  @Put(':id')
  update(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.updateProduct(updateProductDto, id);
  }

  // Delete Product Controller
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productsService.deleteProduct(id);
  }
}
