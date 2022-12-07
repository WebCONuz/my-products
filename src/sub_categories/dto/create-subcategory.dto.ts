import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSubCategory {
  @IsNumber({}, { message: "category_id number bo'lishi kerak" })
  readonly category_id: number;

  @IsNotEmpty()
  @IsString({ message: "sub_category_name string bo'lishi kerak" })
  readonly sub_category_name: string;
}
