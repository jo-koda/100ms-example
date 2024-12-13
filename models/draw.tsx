import { User } from './user'

export interface Draw {
  id?: string
  userId?: string
  entries?: number
  user?: User
  createdAt?: string
  updatedAt?: string
}
