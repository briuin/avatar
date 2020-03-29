<template>
  <div id="briuin-avatar">
    <Provider :store="getTimelineState()">
      <Avatar></Avatar>
    </Provider>
  </div>
</template>

<script lang="ts">
import Avatar from "@/components/avatar.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Avatar
  }
})
export default class App extends Vue {
  getTimelineState() {
    return this.$redux.globalEventDistributor.stores.find(
      (x: any) => x.getState().namespace === "timeline"
    );
  }
}
</script>

<style lang="scss">
#briuin-avatar {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  > div {
    display: flex;
    cursor: pointer;
  }
}
</style>
