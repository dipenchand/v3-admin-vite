import { type RouteRecordRaw, createRouter } from "vue-router"
import { history, flatMultiLevelRoutes } from "./helper"
import routeSettings from "@/config/route"

const Layouts = () => import("@/layouts/index.vue")

/**
 * Home Route
 * In addition to hidden pages such as redirect/403/404/login, it is recommended to set the Name attribute on other pages.
 */
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/redirect",
    component: Layouts,
    meta: {
      hidden: true
    },
    children: [
      {
        path: ":path(.*)",
        component: () => import("@/views/redirect/index.vue")
      }
    ]
  },
  {
    path: "/403",
    component: () => import("@/views/error-page/403.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/404",
    component: () => import("@/views/error-page/404.vue"),
    meta: {
      hidden: true
    },
    alias: "/:pathMatch(.*)*"
  },
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/",
    component: Layouts,
    redirect: "/project",
    children: [
      {
        path: "project",
        component: () => import("@/views/project/index.vue"),
        name: "Project",
        meta: {
          title: "Project",
          svgIcon: "dashboard",
          affix: true
        }
      }
    ]
  },
  {
    path: "/library",
    component: Layouts,
    redirect: "/library",
    children: [
      {
        path: "index",
        component: () => import("@/views/unocss/index.vue"),
        name: "Library",
        meta: {
          title: "Library",
          svgIcon: "unocss"
        }
      }
    ]
  }
]

/**
 * Dynamic routing
 * Used to place routes with permissions (Roles attribute)
 * Must have Name attribute
 */
export const dynamicRoutes: RouteRecordRaw[] = [
  {
    path: "/permission",
    component: Layouts,
    redirect: "/permission/page",
    name: "Permission",
    meta: {
      title: "Permissions",
      svgIcon: "lock",
      roles: ["admin", "editor"], // Roles can be set in the root route
      alwaysShow: true // The root menu will always be shown
    },
    children: [
      {
        path: "page",
        component: () => import("@/views/permission/page.vue"),
        name: "PagePermission",
        meta: {
          title: "Page Level",
          roles: ["admin"] // Or set the role in the sub-navigation
        }
      },
      {
        path: "directive",
        component: () => import("@/views/permission/directive.vue"),
        name: "DirectivePermission",
        meta: {
          title: "Button Level" // If the role is not set, it means: the page does not require permissions, but will inherit the role of the root route.
        }
      }
    ]
  }
]

const router = createRouter({
  history,
  routes: routeSettings.thirdLevelRouteCache ? flatMultiLevelRoutes(constantRoutes) : constantRoutes
})

/** Reset routing */
export function resetRouter() {
  // Note: All dynamic routing routes must have the Name attribute, otherwise they may not be completely reset.
  try {
    router.getRoutes().forEach((route) => {
      const { name, meta } = route
      if (name && meta.roles?.length) {
        router.hasRoute(name) && router.removeRoute(name)
      }
    })
  } catch {
    // It’s okay to force refresh the browser, but the interactive experience isn’t very good.
    window.location.reload()
  }
}

export default router
