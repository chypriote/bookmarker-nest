import { IsString } from 'class-validator'
import { Category } from 'src/categories/category.interface'

export class ListPostsDto {
  limit: 5
  name: string
  shorthand: string
  link: string
  image: string
  description: string
  category: Category
}

export class CreatePostDto {
  @IsString()
  readonly name: string

  @IsString()
  readonly slug: string

  @IsString()
  readonly link: string

  @IsString()
  readonly image: string

  @IsString()
  readonly description: string

  readonly category: Category
}

export class UpdatePostDto {
  @IsString()
  readonly id: string

  @IsString()
  readonly name: string

  @IsString()
  readonly slug: string

  @IsString()
  readonly link: string

  @IsString()
  readonly image: string

  @IsString()
  readonly description: string
}
