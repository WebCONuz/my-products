import {
  Table,
  Model,
  Column,
  DataType,
  // BelongsTo,
  // BelongsToMany,
} from 'sequelize-typescript';
import { SubCategory } from 'src/sub_categories/sub_categories.model';

interface CategoryCreationAttrs {
  category_name: string;
}

@Table({ tableName: 'categories' })
export class Category extends Model<Category, CategoryCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  category_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  category_name: string;

  // @BelongsToMany(() => Role, () => UserRole)
  // roles: Role[];

  // @BelongsTo(() => SubCategory)
  // subCategories: SubCategory[];
}
