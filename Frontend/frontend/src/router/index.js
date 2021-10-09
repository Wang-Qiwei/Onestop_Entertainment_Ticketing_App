import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/homepage.vue";
import BuyTicket from "../views/buyticket.vue";

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: "/homepage", component: Home },
    { path: "/buyticket", component: BuyTicket },
  ],
});

export default router;
