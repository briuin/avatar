import Vue from "vue";

declare module "vue/types/vue" {
  interface Vue {
    $redux: {
      store: any;
      globalEventDistributor: any;
    };
  }
}
