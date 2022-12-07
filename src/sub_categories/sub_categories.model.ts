import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Table,
  Model,
  HasMany,
} from 'sequelize-typescript';
import { Category } from 'src/categories/categories.model';
import { Product } from 'src/products/product.model';

interface SubCategoryCreationAttrs {
  category_id: number;
  sub_category_name: string;
}

@Table({ tableName: 'sub_categories' })
export class SubCategory extends Model<SubCategory, SubCategoryCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  sub_category_id: number;

  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER })
  category_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  sub_category_name: string;

  // @BelongsTo(() => Category)
  // category: Category;

  @HasMany(() => Product)
  products: Product[];
}
