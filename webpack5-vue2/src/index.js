import "@/style.css";
import Vue from 'vue';
import App from '@/components/App/index.vue';
import {router} from "@/router";
import Component1 from "@/components/Component1/index.vue";

Vue.component('Component1', Component1);

new Vue({
  data() {
    return {
      hi: 'Hi!'
    }
  },
  router,
  render: (h) => h(App),
}).$mount("#app");
