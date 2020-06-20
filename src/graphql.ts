/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Post {
  id: string
  name?: string
  slug?: string
  link?: string
  image?: string
  description?: string
  category?: Category
}

export interface Category {
  id: string
  name?: string
  slug?: string
  posts?: Post[]
}

export interface IQuery {
  post(id: number): Post | Promise<Post>
}
