export type APIMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export interface Parameter {
  id: string
  key: string
  value: string
}

export interface APIConfig {
  url: string
  method: APIMethod
  headers: Parameter[]
  query: Parameter[]
  path: Parameter[]
  body: Parameter[]
}

export interface APIResponse {
  status?: number
  data?: unknown
  error?: string
}
