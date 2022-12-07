import { ApiProperty } from '@nestjs/swagger';
import {
  Table,
  Model,
  Column,
  DataType,
  HasMany,
  // BelongsTo,
  // BelongsToMany,
} from 'sequelize-typescript';
import { SubCategory } from 'src/sub_categories/sub_categories.model';

interface CategoryCreationAttrs {
  category_name: string;
}

@Table({ tableName: 'categories' })
export class Category extends Model<Category, CategoryCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Unikal ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  category_id: number;

  @ApiProperty({ example: 'electronics', description: 'Category name' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  category_name: string;

  @HasMany(() => SubCategory)
  subCategories: SubCategory[];
}
