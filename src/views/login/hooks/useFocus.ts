import { ref } from "vue"

export function useFocus() {
  const isFocus = ref<boolean>(false)

  /**
   * Handles the blur event (lose focus) for the input element.
   */
  const handleBlur = () => {
    isFocus.value = false
  }

  /**
   * Handles the focus event.
   */
  const handleFocus = () => {
    isFocus.value = true
  }

  return { isFocus, handleBlur, handleFocus }
}
