import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ example: 'electronics', description: 'Category name' })
  @IsNotEmpty()
  @IsString({ message: "Categoriya nomi string bo'lishi kerak" })
  readonly category_name: string;
}
