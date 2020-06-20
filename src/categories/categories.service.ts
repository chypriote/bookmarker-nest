import { nanoid } from 'nanoid'
import slugify from 'slugify'
import { Injectable } from '@nestjs/common'
import { Category } from './category.interface'
import { CreateCategoryDto, ListCategoriesDto } from './categories.dto'

@Injectable()
export class CategoriesService {
  private readonly categories: Category[] = []

  create(category: CreateCategoryDto): void {
    this.categories.push({
      ...category,
      id: nanoid(),
      slug: slugify(category.name),
      posts: [],
    })
  }

  findAll(query: ListCategoriesDto): Category[] {
    return this.categories
  }
}
