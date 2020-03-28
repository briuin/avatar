<template>
  <div @click="onClick()">
    <img alt="Vue logo" :src="avatar" />
  </div>
</template>

<script lang="ts">
import Avatars from "@dicebear/avatars";
import sprites from "@dicebear/avatars-male-sprites";
import { connect } from "revux";
import { Component, Vue } from "vue-property-decorator";

@Component({})
class Avatar extends Vue {
  selectedTimeline: any;

  get avatar() {
    const options = {
      base64: true,
      width: "200px",
      height: "200px",
      radius: 50,
      mood: ["happy"]
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any;

    const year = this.selectedTimeline.year;
    const month = this.selectedTimeline.month;
    const avatars = new Avatars(sprites, options);
    return avatars.create(`briuin-${year}-${month}`);
  }

  onClick() {
    const action = {
      type: "CHANGE_TIME",
      payload: {
        year: 2000,
        month: 1
      }
    };
    this.$redux.globalEventDistributor.dispatch(action);
  }
}

const mapState = (state: any) => {
  return {
    selectedTimeline: state.reducer.selectedTimeline
  };
};

export default connect(mapState)(Avatar);
</script>
