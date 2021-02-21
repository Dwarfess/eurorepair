<template lang="html">

  <section class="room_layout" v-if="sidesParams.length">
    <div class="room_container" v-for="(side, index) in sidesParams" :class="side.name" :key="index">
      <div class="room_container_item" tabindex="0">
        <h3>{{side.name}}</h3>
        <sui-button size="large" inverted @click="openSelectedSide(side.name)">Open</sui-button>
      </div>
    </div>
  </section>

</template>

<script lang="ts">
    import {Vue, Component, Prop, Watch, Model} from 'vue-property-decorator';
    import $ from 'jquery';

    import {Project, Room, sideParams} from '@/components/Types';
    // import RoomSketch from "@/components/project/room/RoomSketch.vue";

    @Component({
        components: {},
        directives: {}
    })
    export default class RoomLayout extends Vue {

        @Prop() private roomParams: Room;

        private sidesParams: sideParams[] = [];

        mounted() {
            this.calculateLayout();
        }

        created(): void {
            this.fillSidesParams();
            window.addEventListener('resize', this.calculateLayout);
        }

        private fillSidesParams() {
            const width = Number(this.roomParams.width);
            const length = Number(this.roomParams.length);
            const height = Number(this.roomParams.height);

            this.sidesParams  = [
                {
                    name: 'left_front_side',
                    width: height,
                    height: height
                }, {
                    name: 'front_side',
                    width: width,
                    height: height
                }, {
                    name: 'right_front_side',
                    width: height,
                    height: height
                }, {
                    name: 'top_front_side',
                    width: width,
                    height: height
                }, {
                    name: 'left_side',
                    width: height,
                    height: length
                }, {
                    name: 'bottom_side',
                    width: width,
                    height: length
                }, {
                    name: 'right_side',
                    width: height,
                    height: length
                }, {
                    name: 'top_side',
                    width: width,
                    height: length
                }, {
                    name: 'left_back_side',
                    width: height,
                    height: height
                }, {
                    name: 'back_side',
                    width: width,
                    height: height
                }, {
                    name: 'right_back_side',
                    width: height,
                    height: height
                }, {
                    name: 'top_back_side',
                    width: width,
                    height: height
                }
            ]
        }

        private calculateLayout() {
            const width = Number(this.roomParams.width);
            const length = Number(this.roomParams.length);
            const height = Number(this.roomParams.height);

            // multiply width for top, bottom and height for left, right (because in case of left, right - width is height)
            const calcWidth = (width * 2) + (height * 2);

            //add length and multiply height for front, back (because in case of front, back - width is height)
            const calcLength = length + (height * 2);

            this.resizeLayout(calcWidth, calcLength);

            this.sidesParams.forEach((side) => {
                const selector = $(`.${side.name}`);
                this.calculateSides(selector, side.width, side.height, calcWidth, calcLength);
            });
        }

        private resizeLayout(width, length): void {
            const $projectLayout: any = $('.room_layout');
            const $projectArticleCanvas: any = $('.project_article_canvas');

            let calcWidth = 0;
            let calcLength = 0;

            if (width > length) {
                calcWidth = $projectArticleCanvas.width();
                calcLength = $projectArticleCanvas.width() * (length / width);

                if (calcLength > $projectArticleCanvas.height()) {
                    //percentage difference between width and height
                    const percentDifference = calcLength / calcWidth;

                    calcLength = $projectArticleCanvas.height();
                    calcWidth = calcLength / percentDifference;
                }
            } else {
                calcLength = $projectArticleCanvas.height();
                calcWidth = $projectArticleCanvas.height() * (width / length);

                if (calcWidth > $projectArticleCanvas.width()) {
                    //percentage difference between height and width
                    const percentDifference = calcWidth / calcLength;

                    calcWidth = $projectArticleCanvas.width();
                    calcLength = calcWidth / percentDifference;
                }
            }

            $projectLayout.css({
                'width': `${parseFloat(calcWidth).toFixed(0)}px`,
                'height': `${parseFloat(calcLength).toFixed(0)}px`
            });
        }

        private calculateSides(selector, width, length, calcWidth, calcLength) {
            selector.css({
                'width': `${parseFloat((width/calcWidth) * 100).toFixed(1)}%`,
                'height': `${parseFloat((length/calcLength) * 100).toFixed(1)}%`
            });
        }

        private openSelectedSide(sideName) {
            const id = this.$route.params.id;
            const roomId = this.$route.params.roomId;

            this.$router.push({ name: 'sidePage', params: {id, roomId, sideName}});
        }

        destroyed(): void {
            window.removeEventListener('resize', this.calculateSketch);
        }
    }


</script>

<style lang="scss">
  @import '../../../variables';

  .room_layout {
    background: $subBgColor;
    border: 2px solid $mainColor;
    border-radius: 2px;
    position: relative;
    padding: 2px;

    .room_container {
      min-width: 5%;
      height: 50%;
      padding: 3px;
      float: left;

      &_item {
        border: 2px solid $mainColor;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, rgba(0, 0, 0, 0) 80%, #e0e1e2 100%, rgba(0, 0, 0, 0) 100%);
        background-size: 0.5em 0.5em;
        color: $mainColor;
        display: flex;
        align-items: center;
        justify-content: center;

        h3 {
          padding: 10px 0;
          margin: 0;
          font-size: 16px;
          text-overflow: ellipsis;
          overflow: hidden;
          padding: 5px;
        }

        button {
          display: none;
          position: absolute;
        }

        &:focus-within {
          box-shadow: 0px 0px 20px 5px black;
          border: 2px solid $mainColor;
          outline: none;

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
    .left_front_side,
    .right_front_side,
    .top_front_side,
    .left_back_side,
    .right_back_side,
    .top_back_side {
      visibility: hidden;
    }
  }
</style>
