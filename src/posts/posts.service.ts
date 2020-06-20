import { Injectable } from '@nestjs/common'
import { Post } from './post.interface'
import { CreatePostDto } from './posts.dto'
import { nanoid } from 'nanoid'

@Injectable()
export class PostsService {
  private readonly posts: Post[] = []

  create(post: CreatePostDto): void {
    this.posts.push({ ...post, id: nanoid() })
  }

  findAll(): Post[] {
    return this.posts
  }

  findOneById(id: string): Post | null {
    return this.posts.find((post) => post.id === id)
  }
}
