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
            v-on:activated="activateEv(1)"
            v-on:deactivated="deactivateEv(2)">
      <h3>{{room.name}}</h3>
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

        private borderWidth: number = 8;

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

        private activateEv(index): void {
            console.log(index)
        }

        private deactivateEv(index): void {
            console.log(index)
        }
    }
</script>

<style scoped lang="scss">
  .project-layout-item {

  }
</style>
