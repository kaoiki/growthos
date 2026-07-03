const API_BASE = import.meta.env.VITE_API_BASE || ''

const TOKEN_KEY = 'growthos_token'

export interface ApiOptions extends RequestInit {
  params?: Record<string, string>
  /** true = 不需要 token 的公开接口（登录、注册等） */
  public?: boolean
}

/** 获取本地存储的 token */
export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY)
}

/** 登录成功后保存 token */
export function setToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token)
}

/** 登出时清除 token */
export function clearToken(): void {
  localStorage.removeItem(TOKEN_KEY)
}

/** 是否已登录（有 token） */
export function isAuthenticated(): boolean {
  return !!getToken()
}

/**
 * 封装的 fetch 请求，自动携带：
 * - X-app-code: growthos
 * - Authorization: Bearer <token>（除非标记为 public）
 */
export async function api(url: string, options: ApiOptions = {}): Promise<Response> {
  const { params, public: isPublic, ...fetchOptions } = options

  // 拼接 query params
  let fullUrl = `${API_BASE}${url}`
  if (params) {
    const qs = new URLSearchParams(params).toString()
    fullUrl += `?${qs}`
  }

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'X-app-code': 'growthos',
  }

  // 非公开接口自动携带 token
  if (!isPublic) {
    const token = getToken()
    if (token) {
      headers['Authorization'] = `Bearer ${token}`
    }
  }

  const res = await fetch(fullUrl, {
    ...fetchOptions,
    headers: {
      ...headers,
      ...(fetchOptions.headers as Record<string, string> | undefined),
    },
  })

  if (!res.ok) {
    throw new ApiError(res.status, await res.text().catch(() => ''))
  }

  return res
}

/** 快捷 GET 并解析 JSON */
export async function get<T = unknown>(url: string, params?: Record<string, string>): Promise<T> {
  const res = await api(url, { method: 'GET', params })
  return res.json()
}

/** 快捷 POST JSON（public = 不需要 token 的公开接口） */
export async function post<T = unknown>(url: string, body?: unknown, isPublic = false): Promise<T> {
  const res = await api(url, { method: 'POST', public: isPublic, body: body ? JSON.stringify(body) : undefined })
  return res.json()
}

export class ApiError extends Error {
  status: number
  body: string

  constructor(status: number, body: string) {
    super(`API Error: ${status}`)
    this.status = status
    this.body = body
  }
}
