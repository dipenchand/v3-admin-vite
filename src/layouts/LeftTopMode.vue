<script lang="ts" setup>
import { computed } from "vue"
import { storeToRefs } from "pinia"
import { useAppStore } from "@/store/modules/app"
import { useSettingsStore } from "@/store/modules/settings"
import { AppMain, NavigationBar, Sidebar, Logo } from "./components"

const appStore = useAppStore()
const settingsStore = useSettingsStore()
const { showLogo } = storeToRefs(settingsStore)

const layoutClasses = computed(() => {
  return {
    hideSidebar: !appStore.sidebar.opened
  }
})
</script>

<template>
  <div :class="layoutClasses" class="app-wrapper">
    <div class="fixed-header layout-header">
      <Logo v-if="showLogo" :collapse="false" class="logo" />
      <div class="content">
        <NavigationBar />
      </div>
    </div>
    <div class="main-container">
      <Sidebar class="sidebar-container" />
      <AppMain class="app-main" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";
$transition-time: 0.35s;

.app-wrapper {
  @extend %clearfix;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  z-index: 1002;
  width: 100%;
  display: flex;
  .logo {
    width: var(--cfm-sidebar-width);
  }
  .content {
    flex: 1;
    position: relative;
  }
}

.layout-header {
  background-color: var(--cfm-header-bg-color);
  box-shadow: var(--el-box-shadow-lighter);
}

.main-container {
  min-height: 100%;
}

.sidebar-container {
  transition: width $transition-time;
  width: var(--cfm-sidebar-width) !important;
  height: 100%;
  position: fixed;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  padding-top: var(--cfm-navigationbar-height);
}

.app-main {
  transition: padding-left $transition-time;
  padding-top: var(--cfm-navigationbar-height);
  padding-left: var(--cfm-sidebar-width);
  height: 100vh;
  overflow: auto;
}

.hideSidebar {
  .sidebar-container {
    width: var(--cfm-sidebar-hide-width) !important;
  }
  .app-main {
    padding-left: var(--cfm-sidebar-hide-width);
  }
}

.hasTagsView {
  .sidebar-container {
    padding-top: var(--cfm-header-height);
  }
  .app-main {
    padding-top: var(--cfm-header-height);
  }
}
</style>
