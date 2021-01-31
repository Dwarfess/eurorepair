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

        // private mainParams: Room = this.projectParams.mainParams[0];
        // private rooms: any[] = [];
        //
        // private percentsInOneScaleUnit: number = 0;
        // private pixelsInOnePercent: number = 0;
        //
        // private projectLayoutWidth: number = 0;
        // private projectLayoutHeight: number = 0;
        //
        // @Watch('projectParams', {immediate: true, deep: true})
        // private watchMainParams(e) {
        //     this.drawLayout();
        // }
        //
        // private resizeLayout(): void {
        //     const $projectLayout: any = $('.project_layout');
        //     const $projectArticleCanvas: any = $('.project_article_canvas');
        //
        //     const width = Number(this.mainParams.width);
        //     const length = Number(this.mainParams.length);
        //
        //     let calcWidth = 0;
        //     let calcLength = 0;
        //
        //     if (width > length) {
        //         calcWidth = $projectArticleCanvas.width();
        //         calcLength = $projectArticleCanvas.width() * (length / width);
        //
        //         if (calcLength > $projectArticleCanvas.height()) {
        //             //percentage difference between width and height
        //             const percentDifference = calcLength / calcWidth;
        //
        //             calcLength = $projectArticleCanvas.height();
        //             calcWidth = calcLength / percentDifference;
        //         }
        //     } else {
        //         calcLength = $projectArticleCanvas.height();
        //         calcWidth = $projectArticleCanvas.height() * (width / length);
        //
        //         if (calcWidth > $projectArticleCanvas.width()) {
        //             //percentage difference between height and width
        //             const percentDifference = calcWidth / calcLength;
        //
        //             calcWidth = $projectArticleCanvas.width();
        //             calcLength = calcWidth / percentDifference;
        //         }
        //     }
        //
        //     $projectLayout.css({
        //         'width': `${parseFloat(calcWidth).toFixed(0)}px`,
        //         'height': `${parseFloat(calcLength).toFixed(0)}px`
        //     });
        //
        //     this.projectLayoutWidth = calcWidth;
        //     this.projectLayoutHeight = calcLength;
        //
        //     // scale one point
        //     this.percentsInOneScaleUnit = width > length ? 100 / width : 100 / length;
        //
        //     // how much pixels in one percent
        //     this.pixelsInOnePercent = calcWidth > calcLength ? calcWidth / 100 : calcLength / 100;
        // }
        //
        // private drawRooms() {
        //     this.rooms = [];
        //
        //     for (let category of Object.values(this.projectParams)) {
        //         if (Array.isArray(category) && category.length) {
        //             if (category[0].category !== 'mainParam') {
        //                 category.forEach((room) => {
        //
        //                     if (!room.dragAndDropParams) {
        //                         // data in percent format
        //                         room.dragAndDropParams = {
        //                             width: this.unitToPercentConverter(room.width),
        //                             height: this.unitToPercentConverter(room.length),
        //                             top: 0,
        //                             left: 0,
        //                         };
        //                     }
        //
        //                     //in case of need rerender all rooms after changing some room params
        //                     if (room.dragAndDropParams.editable) {
        //                         // data in percent format
        //                         room.dragAndDropParams.width = this.unitToPercentConverter(room.width);
        //                         room.dragAndDropParams.height = this.unitToPercentConverter(room.length);
        //
        //                         room.dragAndDropParams.editable = false;
        //                     }
        //
        //                     this.rooms.push({
        //                         id: room.id,
        //                         width: this.percentToPixelConverter(room.dragAndDropParams.width),
        //                         height: this.percentToPixelConverter(room.dragAndDropParams.height),
        //                         top: this.percentToPixelConverter(room.dragAndDropParams.top),
        //                         left: this.percentToPixelConverter(room.dragAndDropParams.left),
        //                         name: room.name
        //                     });
        //                 });
        //             }
        //         }
        //     }
        // }
        //
        // public recalculateRoomsParamsInPercent(id, params) {
        //     for (const category of Object.values(this.projectParams)) {
        //
        //         if (Array.isArray(category) && category.length) {
        //             if (category[0].category !== 'mainParam') {
        //                 category.forEach((projectRoom) => {
        //                     if (projectRoom.id === id) {
        //                         const dnd = projectRoom.dragAndDropParams;
        //
        //                         dnd.width = this.pixelToPercentConverter(params.width);
        //                         dnd.height = this.pixelToPercentConverter(params.height);
        //                         dnd.top = this.pixelToPercentConverter(params.top);
        //                         dnd.left = this.pixelToPercentConverter(params.left);
        //                     }
        //                 });
        //             }
        //         }
        //     }
        // }
        //
        // private pixelToPercentConverter(roomParam: number) {
        //     return Number(parseFloat(roomParam / this.pixelsInOnePercent).toFixed(1));
        // }
        //
        // private percentToPixelConverter(roomParam: number) {
        //     return Number(parseFloat(roomParam * this.pixelsInOnePercent).toFixed(1));
        // }
        //
        // private unitToPercentConverter(roomParam: number) {
        //     return Number(parseFloat(this.percentsInOneScaleUnit * Number(roomParam)).toFixed(0));
        // }
        //
        // private drawLayout() {
        //     this.resizeLayout();
        //     this.pixelsInOnePercent && this.drawRooms();
        // }
        //
        // created(): void {
        //     window.addEventListener('resize', this.drawLayout);
        // }
        //
        // mounted(): void {
        //     this.drawLayout();
        // }
        //
        // destroyed(): void {
        //     window.removeEventListener('resize', this.drawLayout);
        // }
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
