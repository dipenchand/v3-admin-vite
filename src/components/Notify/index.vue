<script lang="ts" setup>
import { ref, computed } from "vue"
import { ElMessage } from "element-plus"
import { Bell } from "@element-plus/icons-vue"
import NotifyList from "./NotifyList.vue"
import { type ListItem, messageData } from "./data"

interface DataItem {
  type: "primary" | "success" | "warning" | "danger" | "info"
  list: ListItem[]
}

/** The current value of the index */
const badgeValue = computed(() => {
  return data.value.reduce((sum, item) => sum + item.list.length, 0)
})
/** Maximum value of corner mark */
const badgeMax = 99
/** Panel width */
const popoverWidth = 350
/** All data */
const data = ref<DataItem[]>([
  // Message Data
  {
    name: "Information",
    type: "danger",
    list: messageData
  }
])

const handleHistory = () => {
  ElMessage.success(`Redirect to Library`)
}
</script>

<template>
  <div class="notify">
    <el-popover placement="bottom" :width="popoverWidth" trigger="click">
      <template #reference>
        <el-badge :value="badgeValue" :max="badgeMax" :hidden="badgeValue === 0">
          <el-tooltip effect="dark" content="Notification" placement="bottom">
            <el-icon :size="20">
              <Bell />
            </el-icon>
          </el-tooltip>
        </el-badge>
      </template>
      <template #default>
        <div v-for="(item, index) in data" :name="item.name" :key="index">
          <slot>
            {{ item.name }}
            <el-badge :value="item.list.length" :max="badgeMax" :type="item.type" />
          </slot>
          <el-scrollbar height="400px">
            <NotifyList :list="item.list" />
          </el-scrollbar>
        </div>
        <div class="notify-history">
          <el-button link @click="handleHistory">Check Info History</el-button>
        </div>
      </template>
    </el-popover>
  </div>
</template>

<style lang="scss" scoped>
.notify {
  margin-right: 10px;
  color: var(--el-text-color-regular);
}
.notify-history {
  text-align: center;
  padding-top: 12px;
  border-top: 1px solid var(--el-border-color);
}
</style>
