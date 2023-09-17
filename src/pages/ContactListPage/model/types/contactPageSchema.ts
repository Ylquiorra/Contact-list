import { Contact } from '@/entities/Contact'

export interface ContactPageSchema {
  isLoading: boolean
  error?: string
  list?: Contact[]

  search?: string

  _inited: boolean
}
