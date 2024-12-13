export interface Paginated<T> {
  currentPage: number
  data: T[]
  total: number
  to: number
  from: number
  lastPage: number
  perPage?: number
}
