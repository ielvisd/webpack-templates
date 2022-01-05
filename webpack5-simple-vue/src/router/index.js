import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home/index.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home
}, {
    path: "/about",
    name: "About",
    component: () => import("@/views/about/index.vue")
}];

const router = new VueRouter({
    mode: "history",
    routes
});

export { router };
