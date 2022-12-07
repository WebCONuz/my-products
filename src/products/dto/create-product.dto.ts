import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: '1', description: 'Sub category id' })
  @IsNotEmpty()
  @IsNumber()
  readonly sub_category_id: number;

  @ApiProperty({ example: 'redmi', description: 'Model of product' })
  @IsNotEmpty()
  @IsString()
  readonly model: string;

  @ApiProperty({
    example: 'redmi note 6 pro',
    description: 'Fullname of product',
  })
  @IsNotEmpty()
  @IsString()
  readonly product_name: string;

  @ApiProperty({ example: 'black', description: 'Color of product' })
  @IsNotEmpty()
  @IsString()
  readonly color: string;

  @ApiProperty({ example: '236', description: 'Price of product' })
  @IsNotEmpty()
  @IsNumber()
  readonly price: number;
}
