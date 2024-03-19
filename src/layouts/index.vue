<script lang="ts" setup>
import useResize from "./hooks/useResize"
import { useDevice } from "@/hooks/useDevice"
import { useLayoutMode } from "@/hooks/useLayoutMode"
import LeftMode from "./LeftMode.vue"

useResize()

const { isMobile } = useDevice()
const { isLeft } = useLayoutMode()
</script>

<template>
  <div>
    <LeftMode v-if="isLeft || isMobile" />
  </div>
</template>
