/** Determine whether it is an array */
export const isArray = (arg: unknown) => {
  return Array.isArray ? Array.isArray(arg) : Object.prototype.toString.call(arg) === "[object Array]"
}

/** Determine whether it is a string */
export const isString = (str: unknown) => {
  return typeof str === "string" || str instanceof String
}

/** Determine whether it is an external link */
export const isExternal = (path: string) => {
  const reg = /^(https?:|mailto:|tel:)/
  return reg.test(path)
}

/** Determine whether it is a URL (with protocol) */
export const isUrl = (url: string) => {
  const reg = /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/
  return reg.test(url)
}

/** Determine whether it is a URL or IP (with port) */
export const isUrlPort = (url: string) => {
  const reg = /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/
  return reg.test(url)
}

/** Determine whether it is a domain name (without protocol) */
export const isDomain = (domain: string) => {
  const reg = /^([0-9a-zA-Z-]{1,}\.)+([a-zA-Z]{2,})$/
  return reg.test(domain)
}

/** Determine whether the time format is 24-hour format (HH:mm:ss) */
export const is24H = (time: string) => {
  const reg = /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/
  return reg.test(time)
}

/** Determine whether it is a mobile phone number (starting with 1) */
export const isPhoneNumber = (str: string) => {
  const reg = /^(?:(?:\+|00)86)?1\d{10}$/
  return reg.test(str)
}

/** Determine whether it is an Email */
export const isEmail = (email: string) => {
  const reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
  return reg.test(email)
}

/** Determine whether it is an IPv4 address */
export const isIPv4 = (ip: string) => {
  const reg =
    /^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])(?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$/
  return reg.test(ip)
}
