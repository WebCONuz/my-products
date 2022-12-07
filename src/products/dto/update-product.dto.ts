import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProductDto {
  @ApiProperty({ example: '1', description: 'Sub category id' })
  @IsOptional()
  @IsNumber()
  readonly sub_category_id: number;

  @ApiProperty({ example: 'redmi', description: 'Model of product' })
  @IsOptional()
  @IsString()
  readonly model: string;

  @ApiProperty({
    example: 'redmi note 6 pro',
    description: 'Full name of product',
  })
  @IsOptional()
  @IsString()
  readonly product_name: string;

  @ApiProperty({ example: 'silver', description: 'Color of product' })
  @IsOptional()
  @IsString()
  readonly color: string;

  @ApiProperty({ example: '100', description: 'Price of product' })
  @IsOptional()
  @IsNumber()
  readonly price: number;
}
