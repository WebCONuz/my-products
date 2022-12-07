import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  ForeignKey,
  Table,
  Model,
} from 'sequelize-typescript';
import { SubCategory } from 'src/sub_categories/sub_categories.model';

interface ProductCreationAttrs {
  category_id: number;
  sub_category_name: string;
}

@Table({ tableName: 'product' })
export class Product extends Model<Product, ProductCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Unikal ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  product_id: number;

  @ApiProperty({ example: '1', description: 'Sub category id' })
  @ForeignKey(() => SubCategory)
  @Column({ type: DataType.INTEGER })
  sub_category_id: number;

  @ApiProperty({ example: 'redmi', description: 'Model of product' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  model: string;

  @ApiProperty({
    example: 'redmi note 6 pro',
    description: 'Fullname of product',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  product_name: string;

  @ApiProperty({ example: 'black', description: 'Color of product' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  color: string;

  @ApiProperty({ example: '236', description: 'Price of product' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: number;
}
