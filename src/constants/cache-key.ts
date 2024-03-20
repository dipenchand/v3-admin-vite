const SYSTEM_NAME = "creative-collection"

/** Key used when caching data */
class CacheKey {
  static readonly TOKEN = `${SYSTEM_NAME}-token-key`
  static readonly SIDEBAR_STATUS = `${SYSTEM_NAME}-sidebar-status-key`
}

export default CacheKey
