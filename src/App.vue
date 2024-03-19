<script lang="ts" setup>
import { useTheme } from "@/hooks/useTheme"
// Set Element Plus language to Japanese
import ja from "element-plus/es/locale/lang/ja"

const { initTheme } = useTheme()
initTheme()
</script>

<template>
  <el-config-provider :locale="ja">
    <router-view />
  </el-config-provider>
</template>
