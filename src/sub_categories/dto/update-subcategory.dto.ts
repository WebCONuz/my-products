import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateSubCategoryDto {
  @IsOptional()
  @IsNumber()
  readonly category_id: number;

  @IsOptional()
  @IsString({ message: "sub_category_name string bo'lishi kerak" })
  readonly sub_category_name: string;
}
