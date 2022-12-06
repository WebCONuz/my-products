import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString({ message: "Categoriya nomi string bo'lishi kerak" })
  readonly category_name: string;
}
