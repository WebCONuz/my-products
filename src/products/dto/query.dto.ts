import { IsNumber, IsOptional, IsString } from 'class-validator';

export class QueryDto {
  @IsOptional()
  @IsString()
  readonly subCategoryId: string;

  @IsOptional()
  @IsString()
  readonly model: string;
}
