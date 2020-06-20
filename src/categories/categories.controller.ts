import { Controller, Get, Query, Param, Post, HttpCode, Body, ValidationPipe, Put, Delete } from '@nestjs/common'
import { ListCategoriesDto, CreateCategoryDto, UpdateCategoryDto } from './categories.dto'
import { CategoriesService } from './categories.service'
import { Category } from './category.interface'

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  async findAll(@Query() query: ListCategoriesDto): Promise<Category[]> {
    return this.categoriesService.findAll(query)
  }
  @Get(':id')
  async show(@Param('id') id: string): Promise<string> {
    return `Get posts ${id}`
  }

  @Post()
  @HttpCode(204)
  async create(@Body(new ValidationPipe()) category: CreateCategoryDto): Promise<void> {
    this.categoriesService.create(category)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body(new ValidationPipe()) category: UpdateCategoryDto) {
    return `This action updates a #${id} post`
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} post`
  }
}
