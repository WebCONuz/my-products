import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product) private productRepository: typeof Product,
  ) {}

  // Add Product Service
  async create(createProductDto: CreateProductDto) {
    return await this.productRepository.create(createProductDto);
  }

  // Get All Product Service
  async getAll() {
    return await this.productRepository.findAll({ include: { all: true } });
  }

  // Get All Product Service
  async getOne(id: number) {
    return await this.productRepository.findOne({
      where: { product_id: id },
      include: { all: true },
    });
  }

  // Update Product Service
  async updateProduct(updateProductDto: UpdateProductDto, id: number) {
    return await this.productRepository.update(updateProductDto, {
      where: { product_id: id },
      returning: true,
    });
  }

  // Delete Product Service
  async deleteProduct(id: number) {
    return await this.productRepository.destroy({
      where: { product_id: id },
    });
  }
}
