import Vue from 'vue';
import App from '@/App.vue';
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
