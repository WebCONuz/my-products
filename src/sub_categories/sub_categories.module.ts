import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SubCategoriesController } from './sub_categories.controller';
import { Category } from 'src/categories/categories.model';
import { SubCategory } from './sub_categories.model';
import { SubCategoriesService } from './sub_categories.service';

@Module({
  imports: [SequelizeModule.forFeature([Category, SubCategory])],
  controllers: [SubCategoriesController],
  providers: [SubCategoriesService],
})
export class SubCategoriesModule {}
