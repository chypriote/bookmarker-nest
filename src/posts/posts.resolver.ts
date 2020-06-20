import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { PostsService } from './posts.service'
import { CategoriesService } from '../categories/categories.service'
import { Post } from './post.interface'
import { Category } from '../categories/category.interface'

@Resolver('Post')
export class PostsResolver {
  constructor(private postsService: PostsService, private categoriesService: CategoriesService) {}

  @Query('post')
  async getPost(@Args('id') id: string) {
    return this.postsService.findOneById(id)
  }

  @ResolveField('categories')
  async getCategories(@Parent() post: Post): Promise<Category[]> {
    const { id } = post
    return this.categoriesService.findAll({ post: id })
  }
}
