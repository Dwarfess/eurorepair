<template lang="html">

  <section class="project-layout">
    <ProjectLayoutItem v-for="room of rooms"
                       :room='room'
                       :projectLayoutWidth="projectLayoutWidth"
                       :projectLayoutHeight="projectLayoutHeight"
                       :key="room.id">
    </ProjectLayoutItem>
  </section>

</template>

<script lang="ts">
    import {Vue, Component, Prop, Watch, Model} from 'vue-property-decorator';
    import VueDragResize from 'vue-drag-resize';
    import $ from 'jquery';

    import ProjectLayoutItem from "@/components/project/ProjectLayoutItem.vue";
    import {Project, ProjectItem} from '@/components/Types';

    @Component({
        components: {ProjectLayoutItem},
        directives: {}
    })
    export default class ProjectLayout extends Vue {
        @Prop() private readonly projectParams: Project;

        private mainParams: ProjectItem = this.projectParams.mainParams[0];
        private rooms: any[] = [];
        private calcPercent: number = 0;

        private projectLayoutWidth: number = 0;
        private projectLayoutHeight: number = 0;

        @Watch('projectParams', {immediate: true, deep: true})
        private watchMainParams() {
            this.resizeLayout();
            // this.drawRooms();
        }

        private resizeLayout(): void {
            const width = parseInt(this.mainParams.width);
            const length = parseInt(this.mainParams.length);

            this.calcPercent = width > length ? 100 / width : 100 / length;

            $('.project-layout').css({
                'width': `${parseFloat(this.calcPercent * width).toFixed(2)}%`,
                'height': `${parseFloat(this.calcPercent * length).toFixed(2)}%`
            });

            this.projectLayoutWidth = $('.project-layout').width();
            this.projectLayoutHeight = $('.project-layout').height();
        }

        private drawRooms() {
            for (let category of Object.values(this.projectParams)) {
                if (Array.isArray(category) && category.length) {
                    if (category[0].category !== 'mainParam') {
                        category.forEach((room) => {
                            const dragAndDropParams = {
                                id: room.id,
                                width: this.percentConverter(this.projectLayoutWidth, room.width),
                                height: this.percentConverter(this.projectLayoutHeight, room.length),
                                top: (room.dragAndDropParams && room.dragAndDropParams.top) || 0,
                                left: (room.dragAndDropParams && room.dragAndDropParams.left) || 0,
                                name: room.name
                            };

                            room.dragAndDropParams = dragAndDropParams;

                            this.rooms.push(dragAndDropParams);
                        });
                    }
                }
            }
        }

        private percentConverter(projectLayoutParam: number, roomParam: number) {
            return Number(parseFloat(projectLayoutParam * ((this.calcPercent * roomParam) / 100)).toFixed(0))
        }

        mounted(): void {
            this.resizeLayout();
            this.drawRooms();
        }
    }
</script>

<style lang="scss">
  @import '../../variables';

  .project-layout {
    background: $subBgColor;
    border: 2px solid $mainColor;
    border-radius: 2px;
    position: relative;

    .room {
      display: inline-block;
      float: left;
      border: 1px solid white;
      margin: 2px;
      color: white;
      font-size: 15px;
      font-weight: bolder;
      text-align: center;
      vertical-align: center;
      text-shadow: 0 0 1px black;
    }
  }
</style>
