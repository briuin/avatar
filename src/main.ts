import "./set-public-path";
import Vue from "vue";
import singleSpaVue from "single-spa-vue";
import revux from "revux";

import App from "./App.vue";
Vue.use(revux);
Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: (h: any) => h(App)
  }
});

export const bootstrap = [
  (props: any) => {
    return new Promise((resolve, reject) => {
      Vue.prototype.$redux = {
        store: props.store,
        globalEventDistributor: props.globalEventDistributor
      };
      resolve();
    });
  },
  vueLifecycles.bootstrap
];
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
