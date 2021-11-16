import Vue from "vue";
import Router from "vue-router";

import Catalog from "../components/Catalog.vue";
import Cart from "../components/Cart.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "catalog",
      component: Catalog,
      // ? нужно ли props: true? 8:15 6/8
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
  ],
});

export default router;
