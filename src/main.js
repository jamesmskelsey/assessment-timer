import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import {
  DropdownPlugin,
  LayoutPlugin,
  FormPlugin,
  FormInputPlugin,
  FormGroupPlugin,
} from "bootstrap-vue";

Vue.config.productionTip = false;
Vue.use(LayoutPlugin);
Vue.use(DropdownPlugin);
Vue.use(FormPlugin);
Vue.use(FormInputPlugin);
Vue.use(FormGroupPlugin);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
