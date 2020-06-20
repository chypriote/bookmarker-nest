import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query } from '@nestjs/common'
import { CreatePostDto, ListPostsDto, UpdatePostDto } from './posts.dto'
import { PostsService } from './posts.service'
import { Post as Item } from './post.interface'
import { ValidationPipe } from '../middlewares/validation.pipe'

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  async findAll(@Query() query: ListPostsDto): Promise<Item[]> {
    return this.postsService.findAll()
  }
  @Get(':id')
  async show(@Param('id') id: string): Promise<string> {
    return `Get posts ${id}`
  }

  @Post()
  @HttpCode(204)
  async create(@Body(new ValidationPipe()) post: CreatePostDto): Promise<void> {
    this.postsService.create(post)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body(new ValidationPipe()) post: UpdatePostDto) {
    return `This action updates a #${id} post`
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} post`
  }
}
