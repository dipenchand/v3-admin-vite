import { ref } from "vue"
import store from "@/store"
import { defineStore } from "pinia"
import { getToken, removeToken, setToken } from "@/utils/cache/cookies"
import { resetRouter } from "@/router"
import { loginApi, getUserInfoApi } from "@/api/login"
import { type LoginRequestData } from "@/api/login/types/login"
import routeSettings from "@/config/route"

export const useUserStore = defineStore("user", () => {
  const token = ref<string>(getToken() || "")
  const roles = ref<string[]>([])
  const username = ref<string>("")

  /** Log in */
  const login = async ({ username, password, code }: LoginRequestData) => {
    const { data } = await loginApi({ username, password, code })
    setToken(data.token)
    token.value = data.token
  }
  /** Get user details */
  const getInfo = async () => {
    const { data } = await getUserInfoApi()
    username.value = data.username
    // Verify whether the returned roles is a non-empty array, otherwise insert a default role that has no effect to prevent the routing guard logic from entering an infinite loop.
    roles.value = data.roles?.length > 0 ? data.roles : routeSettings.defaultRoles
  }
  /** Simulate role changes */
  const changeRoles = async (role: string) => {
    const newToken = "token-" + role
    token.value = newToken
    setToken(newToken)
    // Refresh the page instead of logging in again
    window.location.reload()
  }
  /** Log out */
  const logout = () => {
    removeToken()
    token.value = ""
    roles.value = []
    resetRouter()
  }
  /** Reset Token */
  const resetToken = () => {
    removeToken()
    token.value = ""
    roles.value = []
  }

  return { token, roles, username, login, getInfo, changeRoles, logout, resetToken }
})

/** Use outside setup */
export function useUserStoreHook() {
  return useUserStore(store)
}
