<script lang="ts" setup>
import ja from "element-plus/es/locale/lang/ja"
</script>

<template>
  <el-config-provider :locale="ja">
    <router-view />
  </el-config-provider>
</template>
