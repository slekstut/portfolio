import Vue from "vue";
import App from "./App.vue";
import VueScrollTo from 'vue-scrollto'
import VueSmoothScroll from 'vue2-smooth-scroll'
import Vuelidate from 'vuelidate'

Vue.use(VueScrollTo)
Vue.use(VueSmoothScroll)
Vue.use(Vuelidate)



Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
}).$mount("#app");