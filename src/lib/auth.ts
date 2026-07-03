import { reactive, computed } from 'vue'
import { getToken, setToken as saveToken, clearToken as removeToken } from './api'

/* ── 用户信息类型 ── */
export interface UserInfo {
  id: string
  email: string
  name: string
  avatar?: string
}

/* ── 持久化 key ── */
const TOKEN_KEY = 'growthos_token'
const USER_KEY = 'growthos_user'

/* ── 响应式状态 ── */
const state = reactive<{
  token: string | null
  user: UserInfo | null
}>({
  token: getToken(),
  user: loadUser(),
})

/* ── localStorage 读写 ── */
function loadUser(): UserInfo | null {
  try {
    const raw = localStorage.getItem(USER_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function persistUser(user: UserInfo | null): void {
  if (user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user))
  } else {
    localStorage.removeItem(USER_KEY)
  }
}

/* ── 公开 API ── */

/** 登录成功后统一保存 token + 用户信息 */
export function login(token: string, user: UserInfo): void {
  saveToken(token)
  persistUser(user)
  state.token = token
  state.user = user
}

/** 登出 — 清除 token + 用户信息 */
export function logout(): void {
  removeToken()
  localStorage.removeItem(USER_KEY)
  state.token = null
  state.user = null
}

/** 响应式：是否已登录 */
export const isLoggedIn = computed(() => !!state.token)

/** 响应式：当前用户信息 */
export const currentUser = computed(() => state.user)

/** 响应式：头像显示文本（取首字母兜底） */
export const userInitial = computed(() => state.user?.name?.charAt(0)?.toUpperCase() || '?')
