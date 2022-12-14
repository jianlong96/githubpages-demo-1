import { RouteRecordRaw } from "vue-router";
import { First } from "../components/welcome/First";
import { FirstActions } from "../components/welcome/FirstActions";
import { Forth } from "../components/welcome/Forth";
import { TagCreate } from "../components/tag/TagCreate";
import { TagEdit } from "../components/tag/TagEdit";
import { ForthActions } from "../components/welcome/ForthActions";
import { Second } from "../components/welcome/Second";
import { SecondActions } from "../components/welcome/SecondActions";
import { Third } from "../components/welcome/Third";
import { ThirdActions } from "../components/welcome/ThirdActions";
import { Welcome } from "../views/Welcome";
import { ItemPage } from "../views/ItemPage";
import { ItemList } from "../views/ItemList";
import { ItemCreate } from "../views/ItemCreate";
import { TagPage } from "../views/TagPage";
import { SignInPage } from "../views/SignInPage";
import { StatisticsPage } from "../views/StatisticsPage";
import { ComingSoon } from "../shared/ComingSoon";
export const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/welcome/1" },
  {
    path: "/welcome",
    component: Welcome,
    beforeEnter: (to, from, next) => {
      localStorage.getItem("skipFeatures") === "yes" ? next("/items") : next();
    },
    children: [
      { path: "1", components: { main: First, footer: FirstActions } },
      { path: "2", components: { main: Second, footer: SecondActions } },
      { path: "3", components: { main: Third, footer: ThirdActions } },
      { path: "4", components: { main: Forth, footer: ForthActions } },
    ],
  },
  {
    path: "/items",
    component: ItemPage,
    children: [
      { path: "", component: ItemList },
      { path: "create", component: ItemCreate },
    ],
  },
  {
    path: "/tags",
    component: TagPage,
    children: [
      { path: "create", component: TagCreate },
      { path: ":id/edit", component: TagEdit },
    ],
  },
  {
    path: "/sign_in",
    component: SignInPage,
  },
  {
    path: "/tongji",
    component: StatisticsPage,
  },
  {
    path: "/daochu",
    component: ComingSoon,
  },
  {
    path: "/tixing",
    component: ComingSoon,
  },
];
