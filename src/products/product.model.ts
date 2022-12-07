import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Table,
  Model,
  HasMany,
} from 'sequelize-typescript';
import { SubCategory } from 'src/sub_categories/sub_categories.model';

interface ProductCreationAttrs {
  category_id: number;
  sub_category_name: string;
}

@Table({ tableName: 'product' })
export class Product extends Model<Product, ProductCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  product_id: number;

  @ForeignKey(() => SubCategory)
  @Column({ type: DataType.INTEGER })
  sub_category_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  model: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  product_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  color: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: number;
}
