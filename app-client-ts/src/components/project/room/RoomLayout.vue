<template lang="html">

  <section class="room_layout">
    <RoomSketch1 :roomParams="roomParams"></RoomSketch1>
  </section>

</template>

<script lang="ts">
    import {Vue, Component, Prop, Watch, Model} from 'vue-property-decorator';
    import $ from 'jquery';

    import {Project, Room} from '@/components/Types';
    import RoomSketch1 from "@/components/project/room/RoomSketch1.vue";

    @Component({
        components: {RoomSketch1},
        directives: {}
    })
    export default class RoomLayout extends Vue {
        @Prop() private roomParams: Room;

    }
</script>

<style lang="scss">
  @import '../../../variables';

  .room_layout {
    background: $subBgColor;
    border: 2px solid $mainColor;
    border-radius: 2px;
    position: relative;
  }
</style>
