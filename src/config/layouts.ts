import { getConfigLayout } from "@/utils/cache/local-storage"

/** Project Config Type */
export interface LayoutSettings {
  showSettings: boolean
  showLogo: boolean
  fixedHeader: boolean
  showNotify: boolean
}

/** Default Config */
const defaultSettings: LayoutSettings = {
  showSettings: true,
  fixedHeader: true,
  showLogo: true,
  showNotify: true
}

export const layoutSettings: LayoutSettings = { ...defaultSettings, ...getConfigLayout() }
