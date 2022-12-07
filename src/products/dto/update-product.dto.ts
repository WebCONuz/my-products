import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProductDto {
  @IsOptional()
  @IsNumber()
  readonly sub_category_id: number;

  @IsOptional()
  @IsString()
  readonly model: string;

  @IsOptional()
  @IsString()
  readonly product_name: string;

  @IsOptional()
  @IsString()
  readonly color: string;

  @IsOptional()
  @IsNumber()
  readonly price: number;
}
