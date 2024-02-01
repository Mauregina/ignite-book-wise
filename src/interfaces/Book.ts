import { Category } from './Category'
import { Review } from './Review'

export interface Book {
  id: string
  title: string
  author: string
  description: string
  imageUrl: string
  categories: Category[]
  reviews: Review[]
  reviewScore: number
  reviewCount: number
  pages: number
}
