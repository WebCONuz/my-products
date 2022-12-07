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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';
import { QueryDto } from './dto/query.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './product.model';
import { ProductsService } from './products.service';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // Add Product Controller
  @ApiOperation({ summary: 'Product yaratish' })
  @ApiResponse({ status: 201, type: Product })
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  // Get Products By Query Strings Controller
  @ApiOperation({ summary: "Query bo'yicha barcha productlar" })
  @ApiResponse({ status: 200, type: [Product] })
  @Get()
  getQuery(@Query() query: QueryDto) {
    return this.productsService.getQueryProduct(query);
  }

  // Update Product Controller
  @ApiOperation({ summary: "ID bo'yicha bitta product" })
  @ApiResponse({ status: 200, type: Product })
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.productsService.getOne(id);
  }

  // Update Product Controller
  @ApiOperation({ summary: 'Productni yangilash' })
  @ApiResponse({ status: 200, type: Product })
  @Put(':id')
  update(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.updateProduct(updateProductDto, id);
  }

  // Delete Product Controller
  @ApiOperation({ summary: "Productni o'chirish" })
  @ApiResponse({ status: 200, type: Product })
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productsService.deleteProduct(id);
  }
}
