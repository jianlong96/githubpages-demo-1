import { useMeStore } from "./stores/useMeStore";
import { createApp } from "vue";
import { App } from "./App";
import { createRouter } from "vue-router";
import { routes } from "./config/routes";
import { history } from "./shared/history";
import "@svgstore";
const app = createApp(App);
const router = createRouter({ history, routes });
const meStore = useMeStore();
meStore.fetchMe();

const whiteList: Record<string, "exact" | "startsWith"> = {
  "/": "exact",
  "/items": "exact",
  "/welcome": "startsWith",
  "/sign_in": "startsWith",
};

router.beforeEach((to, from) => {
  for (const key in whiteList) {
    const value = whiteList[key];
    if (value === "exact" && to.path === key) {
      return true;
    }
    if (value === "startsWith" && to.path.startsWith(key)) {
      return true;
    }
  }
  return meStore.mePromise!.then(
    () => true,
    () => "/sign_in?return_to=" + to.path
  );
});
