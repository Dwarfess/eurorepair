<template lang="html">

  <section class="project-layout-item">
    <VueDragResize
            :parentW="projectLayoutWidth - borderWidth"
            :parentH="projectLayoutHeight - borderWidth"
            :isDraggable="true"
            :parentLimitation="true"
            :preventActiveBehavior="false"
            :isActive="true"
            :aspectRatio="false"
            :stickSize="5"
            :w="room.width" :h="room.height"
            :x="room.left" :y="room.top"
            v-on:resizing="resize"
            v-on:dragging="resize"
            :contentClass="'room'"
            :id="`room${room.id}`"
            v-on:activated="toggleRoomClass(true)"
            v-on:deactivated="toggleRoomClass(false)">
      <div class="room">
        <h3>{{room.name}}</h3>
      </div>
    </VueDragResize>
  </section>

</template>

<script lang="ts">
    import {Vue, Component, Prop, Watch, Model} from 'vue-property-decorator';
    import VueDragResize from 'vue-drag-resize';
    import $ from 'jquery';

    import {Project, ProjectItem} from '@/components/Types';

    @Component({
        components: {VueDragResize},
        directives: {}
    })
    export default class ProjectLayoutItem extends Vue {
        @Prop() private room: object;
        @Prop() private recalculateRoomsParamsInPercentParent: any;
        @Prop() private projectLayoutWidth: number;
        @Prop() private projectLayoutHeight: number;

        private borderWidth: number = 3;

        private width: number = 0;
        private height: number = 0;
        private top: number = 0;
        private left: number = 0;

        private resize(newRect) {
            this.recalculateRoomsParamsInPercentParent(this.room.id, newRect);
            this.room.width = newRect.width;
            this.room.height = newRect.height;
            this.room.top = newRect.top;
            this.room.left = newRect.left;
        }

        private toggleRoomClass(state): void {
            $(`#room${this.room.id}`).toggleClass('active', state);
            $(`#room${this.room.id}`).toggleClass('inactive', !state);
        }

        mounted(): void {
            this.toggleRoomClass(false);
        }
    }
</script>

<style scoped lang="scss">
  @import '../../variables';

  .project-layout-item {
    .vdr {
      display: flex;

      .room {
        background: $subBgColor;
        flex: auto;
        border: 1px solid white;
        margin: 3px;
        color: white;
        font-size: 15px;
        font-weight: bolder;
        text-align: center;
        vertical-align: center;
        text-shadow: 0 0 1px black;
      }
    }

    .active {
      box-shadow: black 5px 5px 15px 0px;
      z-index:999 !important;
    }
  }
</style>
