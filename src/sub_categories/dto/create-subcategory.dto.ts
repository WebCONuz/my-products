import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSubCategory {
  @ApiProperty({ example: '1', description: 'Category Id' })
  @IsNumber({}, { message: "category_id number bo'lishi kerak" })
  readonly category_id: number;

  @ApiProperty({ example: 'smart phones', description: 'Name of sub category' })
  @IsNotEmpty()
  @IsString({ message: "sub_category_name string bo'lishi kerak" })
  readonly sub_category_name: string;
}
