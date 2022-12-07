import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateSubCategoryDto {
  @ApiProperty({ example: '1', description: 'Category Id' })
  @IsOptional()
  @IsNumber()
  readonly category_id: number;

  @ApiProperty({ example: 'smart phones', description: 'Name of sub category' })
  @IsOptional()
  @IsString({ message: "sub_category_name string bo'lishi kerak" })
  readonly sub_category_name: string;
}
