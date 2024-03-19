import { getConfigLayout } from "@/utils/cache/local-storage"
import { LayoutModeEnum } from "@/constants/app-key"

/** Project Config Type */
export interface LayoutSettings {
  showSettings: boolean
  layoutMode: LayoutModeEnum
  showLogo: boolean
  fixedHeader: boolean
  showNotify: boolean
}

/** Default Config */
const defaultSettings: LayoutSettings = {
  layoutMode: LayoutModeEnum.Left,
  showSettings: true,
  fixedHeader: true,
  showLogo: true,
  showNotify: true
}

export const layoutSettings: LayoutSettings = { ...defaultSettings, ...getConfigLayout() }
