import { IsString } from 'class-validator'

export class ListCategoriesDto {
  limit? = 5
  name?: string
  slug?: string
  post?: string
}

export class CreateCategoryDto {
  @IsString()
  readonly name: string
}

export class UpdateCategoryDto {
  @IsString()
  readonly id: string

  @IsString()
  readonly name: string
}
