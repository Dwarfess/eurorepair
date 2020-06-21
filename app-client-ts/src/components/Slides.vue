<template lang="html">

  <section class="src-components-slides">
    <!--        <sui-card-group :items-per-row="3">-->
    <!--            <sui-card v-for="slide of slides" v-bind:key="slide.id">-->
    <!--                <sui-dimmer-dimmable-->
    <!--                        @mouseenter.native="slide.active = true"-->
    <!--                        @mouseleave.native="slide.active = false"-->
    <!--                >-->
    <!--                    <sui-image :src="slide.image"/>-->
    <!--                    <sui-dimmer blurring :active="slide.active">-->
    <!--                        <sui-button inverted>Open page</sui-button>-->
    <!--                    </sui-dimmer>-->
    <!--                </sui-dimmer-dimmable>-->
    <!--                <sui-card-content>-->
    <!--                    <sui-card-header>{{slide.name}}</sui-card-header>-->
    <!--                    <sui-card-meta>Create in Sep 2014</sui-card-meta>-->
    <!--                </sui-card-content>-->
    <!--            </sui-card>-->
    <!--        </sui-card-group>-->


    <div class="ui special cards">
      <div class="card" v-for="slide of slides" v-bind:key="slide.id">
        <div class="blurring dimmable image">
          <div class="ui dimmer">
            <div class="content">
              <div class="center">
                <div class="ui inverted button">Add Friend</div>
              </div>
            </div>
          </div>
          <img :src="slide.image"/>
        </div>
        <div class="content">
          <a class="header">{{slide.name}}</a>
          <div class="meta">
            <span class="date">Created in Sep 2014</span>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="ts">
    import {Vue, Component, Watch, Model} from 'vue-property-decorator';
    import $ from 'jquery';

    @Component({
        components: {},
        directives: {}
    })
    export default class Slides extends Vue {
        private slides = [
            {
                id: 1,
                name: 'Archive',
                image: require('../assets/img/body.jpg'),
                link: '/archive',
                active: false
            }, {
                id: 2,
                name: 'Archive',
                image: require('../assets/img/body2.jpg'),
                link: '/archive',
                active: false
            }, {
                id: 3,
                name: 'Archive',
                image: require('../assets/img/body3.jpg'),
                link: '/archive',
                active: false
            }, {
                id: 4,
                name: 'Archive',
                image: require('../assets/img/body4.jpg'),
                link: '/archive',
                active: false
            }, {
                id: 5,
                name: 'Archive',
                image: require('../assets/img/body5.jpg'),
                link: '/archive',
                active: false
            }, {
                id: 6,
                name: 'Archive',
                image: require('../assets/img/body6.jpg'),
                link: '/archive',
                active: false
            }
        ];
        private images = {
            body: require('../assets/img/body.jpg'),
            body3: require('../assets/img/body3.jpg')
        };

        mounted(): void {
            ($('.special.cards .image') as any).dimmer({
                on: 'hover'
            });
        }
    }
</script>

<style scoped lang="scss">
  .src-components-slides {
    width: 20%;
    height: 100%;
    float: left;
    background-color: rgba(0, 0, 0, 0.3);
    box-shadow: 0 0 10px 0 black;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
      display: none;
    }

    .ui.special.cards {
      margin: 0;

      .card {
        width: 100%;
        margin: 5% 8%;

        .image {
          img {
            border-radius: 4px 4px 0 0;
          }
        }
      }
    }
  }
</style>
