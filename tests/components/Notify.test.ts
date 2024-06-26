import { shallowMount } from "@vue/test-utils"
import { describe, expect, it } from "vitest"
import Notify from "@/components/Notify/index.vue"
import NotifyList from "@/components/Notify/NotifyList.vue"

describe("Notify", () => {
  it("Normal rendering", () => {
    const wrapper = shallowMount(Notify)
    expect(wrapper.classes("notify")).toBe(true)
  })
})

describe("NotifyList", () => {
  it("List length is 0", () => {
    const wrapper = shallowMount(NotifyList, {
      props: {
        list: []
      }
    })
    expect(wrapper.find("el-empty").exists()).toBe(true)
  })
  it("List length is not 0", () => {
    const wrapper = shallowMount(NotifyList, {
      props: {
        list: [
          {
            title: ""
          }
        ]
      }
    })
    expect(wrapper.find("el-empty").exists()).toBe(false)
  })
})
