<script lang="ts" setup>
import ErrorPageLayout from "./components/ErrorPageLayout.vue"
import Svg403 from "@/assets/error-page/403.svg?component" // vite-svg-loader Plug-in functions
</script>

<template>
  <ErrorPageLayout>
    <Svg403 />
  </ErrorPageLayout>
</template>
