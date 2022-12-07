import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { SubCategoriesModule } from './sub_categories/sub_categories.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASWORD),
      database: process.env.POSTGRES_DB,
      models: [],
      autoLoadModels: true,
      logging: false,
    }),
    CategoriesModule,
    SubCategoriesModule,
    ProductsModule,
  ],
})
export class AppModule {}
