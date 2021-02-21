<template lang="html">

  <section class="project-layout-item">
    <VueDragResize
            :parentW="projectLayoutWidth - borderWidth"
            :parentH="projectLayoutHeight - borderWidth"
            :isDraggable="true"
            :parentLimitation="true"
            :preventActiveBehavior="false"
            :isActive="false"
            :aspectRatio="false"
            :stickSize="5"
            :w="room.width" :h="room.height"
            :x="room.left" :y="room.top"
            @resizing="resize"
            @dragging="resize"
            :contentClass="'room'"
            :id="`room${room.id}`"
            @click="toggleRoomClass(true)"
            @deactivated="toggleRoomClass(false)">
      <div class="room">
        <h3>{{room.name}}</h3>
        <sui-button size="large" inverted @click="openSelectedRoom(room.id)">{{room.name}}</sui-button>
      </div>
    </VueDragResize>
  </section>

</template>

<script lang="ts">
    import {Vue, Component, Prop, Watch, Model} from 'vue-property-decorator';
    import VueDragResize from 'vue-drag-resize';
    import $ from 'jquery';

    import {Project, Room} from '@/components/Types';

    @Component({
        components: {VueDragResize},
        directives: {}
    })
    export default class ProjectLayoutItem extends Vue {
        @Prop() private projectParams: Project;
        @Prop() private room: Room;
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
            $(`#room${this.room.id}`).toggleClass('inactive', !state);
            $(`#room${this.room.id}`).toggleClass('active', state);
        }

        private openSelectedRoom(roomId) {
            this.saveProject(roomId);
        }

        private saveProject(roomId) {
            const id = this.$route.params.id;

            let saveMethod;
            if (id !== 'new') {
                saveMethod = this.$store.dispatch('SAVE_PROJECT', this.projectParams);
            } else {
                saveMethod = this.$store.dispatch('CREATE_PROJECT', this.projectParams);
            }

            saveMethod.then(() => this.$router.push({ name: 'roomPage', params: {id, roomId}}));
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
        border: 2px solid white;
        margin: 3px;
        color: white;
        font-size: 15px;
        font-weight: bolder;
        text-align: center;
        vertical-align: center;
        text-shadow: 0 0 1px black;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(45deg, rgba(0, 0, 0, 0) 80%, #e0e1e2 100%, rgba(0, 0, 0, 0) 100%);
        background-size: 0.5em 0.5em;

        h3 {
          padding: 10px 0;
          margin: 0;
          font-size: 16px;
        }

        button {
          display: none;
          position: absolute;
        }
      }
    }

    .active {
      box-shadow: 0px 0px 20px 5px black;
      z-index:999 !important;

      &.room {
        h3 {
          display: none;
        }

        button {
          display: block;
          box-shadow: 0px 0px 20px 5px black;
        }
      }
    }
  }
</style>
