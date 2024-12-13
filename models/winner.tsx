import { User } from './user'

export interface Winner {
  id?: number
  userId?: string
  createdAt?: string
  updatedAt?: string
  hasClaimed?: boolean
  user?: User
}
