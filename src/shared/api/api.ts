import axios from 'axios'
import { USER_STORAGE_TOKEN } from '../consts/localStorage'

const baseUrl = __IS_DEV__ ? 'http://localhost:8000' : 'http://production.com'

export const $api = axios.create({
  baseURL: baseUrl,
})

$api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = localStorage.getItem(USER_STORAGE_TOKEN) || ''
  }
  return config
})
