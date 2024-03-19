<script lang="ts" setup>
import useResize from "./hooks/useResize"
import { useDevice } from "@/hooks/useDevice"
import { useLayoutMode } from "@/hooks/useLayoutMode"
import LeftMode from "./LeftMode.vue"
import TopMode from "./TopMode.vue"
import LeftTopMode from "./LeftTopMode.vue"
import { RightPanel } from "./components"

useResize()

const { isMobile } = useDevice()
const { isLeft, isTop, isLeftTop } = useLayoutMode()
</script>

<template>
  <div>
    <LeftMode v-if="isLeft || isMobile" />
    <TopMode v-else-if="isTop" />
    <LeftTopMode v-else-if="isLeftTop" />
    <RightPanel />
  </div>
</template>
