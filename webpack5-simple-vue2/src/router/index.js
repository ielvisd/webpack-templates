import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home/index.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home
}, {
    path: "/about",
    name: "About",
    component: () => import("@/components/About/index.vue")
}];

const router = new VueRouter({
    mode: "history",
    routes
});

export { router };
