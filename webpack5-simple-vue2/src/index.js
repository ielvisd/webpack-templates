import "@/style.css";
import Vue from 'vue';
import App from '@/components/App/index.vue';
import { router } from "@/router";


let app = new Vue({
    data() {
        return {
            hi: 'Hi!'
        }
    },
    router,
    render: (h) => h(App),
    el: "#app",
});



window.app = app;
