<template lang="html">

  <section class="room_layout">
    <RoomSketch :roomParams="roomParams"></RoomSketch>
  </section>

</template>

<script lang="ts">
    import {Vue, Component, Prop, Watch, Model} from 'vue-property-decorator';
    import $ from 'jquery';

    import {Project, Room} from '@/components/Types';
    import RoomSketch from "@/components/project/room/RoomSketch.vue";

    @Component({
        components: {RoomSketch},
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
