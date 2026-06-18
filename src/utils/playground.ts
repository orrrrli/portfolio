import type { APIConfig, APIMethod, APIResponse, Parameter } from '@/types/playground.types'

export function titleCase(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function parseCurlCommand(curl: string): Partial<APIConfig> {
  const result: APIConfig = {
    url: '',
    method: 'GET',
    headers: [],
    query: [],
    path: [],
    body: [],
  }

  const methodMatch = curl.match(/-X\s+(\w+)|--request\s+(\w+)/)
  if (methodMatch) {
    result.method = (methodMatch[1] || methodMatch[2]).toUpperCase() as APIMethod
  }

  const headerRegex = /-H\s+["']([^"']+)["']/g
  let headerMatch
  while ((headerMatch = headerRegex.exec(curl)) !== null) {
    const colonIdx = headerMatch[1].indexOf(':')
    if (colonIdx !== -1) {
      result.headers.push({
        id: crypto.randomUUID(),
        key: headerMatch[1].slice(0, colonIdx).trim(),
        value: headerMatch[1].slice(colonIdx + 1).trim(),
      })
    }
  }

  const dataMatch = curl.match(/(?:-d|--data(?:-raw)?)\s+["']([^"']+)["']/)
  if (dataMatch) {
    try {
      const parsed = JSON.parse(dataMatch[1])
      result.body = Object.entries(parsed).map(([key, value]) => ({
        id: crypto.randomUUID(),
        key,
        value: String(value),
      }))
      if (result.method === 'GET') result.method = 'POST'
    } catch {
      // non-JSON body — ignore
    }
  }

  const urlMatch = curl.match(/["'](https?:\/\/[^"'\s]+)["']|(?:^|\s)(https?:\/\/\S+)/)
  if (urlMatch) {
    const rawUrl = (urlMatch[1] || urlMatch[2]).replace(/['"\\]$/, '')
    try {
      const parsed = new URL(rawUrl)
      result.url = rawUrl.split('?')[0]
      parsed.searchParams.forEach((value, key) => {
        result.query.push({ id: crypto.randomUUID(), key, value })
      })
    } catch {
      result.url = rawUrl
    }
  }

  return result
}

export async function executeFetch(config: APIConfig): Promise<APIResponse> {
  let url = config.url

  config.path?.forEach((param) => {
    if (param.key && param.value) {
      url = url.replace(new RegExp(`:${param.key}(?=/|$)`), encodeURIComponent(param.value))
    }
  })

  const headers: Record<string, string> = {}
  config.headers?.forEach((h) => {
    if (h.key && h.value) headers[h.key] = h.value
  })

  if (config.query?.length) {
    const params = new URLSearchParams()
    config.query.forEach((q) => {
      if (q.key && q.value) params.append(q.key, q.value)
    })
    const qs = params.toString()
    if (qs) url += (url.includes('?') ? '&' : '?') + qs
  }

  let body: string | undefined
  if (['POST', 'PUT', 'PATCH'].includes(config.method) && config.body?.length) {
    const bodyObj: Record<string, string> = {}
    config.body.forEach((b) => {
      if (b.key) bodyObj[b.key] = b.value
    })
    body = JSON.stringify(bodyObj)
    if (!headers['Content-Type']) headers['Content-Type'] = 'application/json'
  }

  const res = await fetch(url, {
    method: config.method,
    headers,
    ...(body ? { body } : {}),
  })

  let data: unknown
  const contentType = res.headers.get('content-type') || ''
  if (contentType.includes('application/json')) {
    data = await res.json()
  } else {
    data = await res.text()
  }

  return { status: res.status, data }
}

export function buildCleanConfig(config: APIConfig): Partial<APIConfig> {
  const clean: Partial<APIConfig> = { url: config.url, method: config.method }

  const nonEmpty = (arr: Parameter[]) => arr.filter((p) => p.key)

  if (nonEmpty(config.headers).length) clean.headers = nonEmpty(config.headers).map(({ key, value }) => ({ id: '', key, value }))
  if (nonEmpty(config.query).length) clean.query = nonEmpty(config.query).map(({ key, value }) => ({ id: '', key, value }))
  if (nonEmpty(config.path).length) clean.path = nonEmpty(config.path).map(({ key, value }) => ({ id: '', key, value }))
  if (nonEmpty(config.body).length) clean.body = nonEmpty(config.body).map(({ key, value }) => ({ id: '', key, value }))

  return clean
}
