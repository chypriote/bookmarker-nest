import { Post } from '../posts/post.interface'

export interface Category {
  id: string
  name: string
  slug: string
  posts: Post[]
}
