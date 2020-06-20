import { Category } from 'src/categories/category.interface'

export interface Post {
  id: string
  name: string
  slug: string
  link: string
  image: string
  description: string
  category: Category
}
