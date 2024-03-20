import { ref, watch } from "vue"

/** Project title */
const VITE_APP_TITLE = import.meta.env.VITE_APP_TITLE ?? "Creative Collection"

/** Dynamic title */
const dynamicTitle = ref<string>("")

/** Set title */
const setTitle = (title?: string) => {
  dynamicTitle.value = title ? `${VITE_APP_TITLE} | ${title}` : VITE_APP_TITLE
}

/** Watch for title changes */
watch(dynamicTitle, (value, oldValue) => {
  if (document && value !== oldValue) {
    document.title = value
  }
})

export function useTitle() {
  return { setTitle }
}
