import { User } from './User'

export interface Review {
  id: string
  score: number
  description: string
  created_at: string
  user: User
}
