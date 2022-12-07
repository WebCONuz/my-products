import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SubCategory } from 'src/sub_categories/sub_categories.model';
import { Product } from './product.model';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  imports: [SequelizeModule.forFeature([Product, SubCategory])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
