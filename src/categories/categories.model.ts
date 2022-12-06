import {
  Table,
  Model,
  Column,
  DataType,
  BelongsToMany,
} from 'sequelize-typescript';

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
}
