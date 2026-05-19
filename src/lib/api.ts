import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL?.replace(/\/$/, '') ?? ''

export const api = axios.create({
  baseURL: baseURL || undefined,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: false,
})
