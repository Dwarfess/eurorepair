<template lang="html">

  <section class="project-layout">

  </section>

</template>

<script lang="ts">
    import {Vue, Component, Prop, Watch, Model} from 'vue-property-decorator';
    import $ from 'jquery';

    import {Project, ProjectItem} from '@/components/Types';

    @Component({
        components: {},
        directives: {}
    })
    export default class ProjectLayout extends Vue {
        @Prop() private readonly projectParams: Project;

        private mainParams: ProjectItem = this.projectParams.mainParams[0];
        private calcPercent: number = 0;

        @Watch('projectParams', {immediate: true, deep: true})
        private watchMainParams() {
            this.resizeLayout();
            this.drawRooms();
        }

        private resizeLayout(): void {
            const width = parseInt(this.mainParams.width);
            const length = parseInt(this.mainParams.length);

            this.calcPercent = width > length ? 100 / width : 100 / length;

            $('.project-layout').css({
                'width': `${parseFloat(this.calcPercent * width).toFixed(2)}%`,
                'height': `${parseFloat(this.calcPercent * length).toFixed(2)}%`
            }).empty();
        }

        private drawRooms() {
            for (let category of Object.values(this.projectParams)) {
                if (Array.isArray(category) && category.length) {
                    if (category[0].category !== 'mainParam') {
                        category.forEach((room) => {
                            const currentId = `room${room.id}`;
                            $('<div/>', {
                                id: currentId,
                                class: 'room',
                                title: `${room.id}`
                            }).appendTo('.project-layout');

                            $(`#${currentId}`).css({
                                'width': `${parseFloat(this.calcPercent * room.width).toFixed(2)}%`,
                                'height': `${parseFloat(this.calcPercent * room.length).toFixed(2)}%`
                            }).text(`${room.name}`);
                        });
                    }
                }
            }
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
