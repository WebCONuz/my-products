import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class QueryDto {
  @ApiProperty({ example: '1', description: 'Category id' })
  @IsOptional()
  @IsString()
  readonly categoryId: string;

  @ApiProperty({ example: '1', description: 'Sub category id' })
  @IsOptional()
  @IsString()
  readonly subCategoryId: string;

  @ApiProperty({ example: 'redmi', description: 'Model category id' })
  @IsOptional()
  @IsString()
  readonly model: string;
}
