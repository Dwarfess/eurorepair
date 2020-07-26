<template lang="html">

  <section class="slides">
    <sui-card-group :items-per-row="3">
      <sui-card v-if="Array.isArray(slide.mainParams)" v-for="slide of slides" :key="slide.id">
        <sui-dimmer-dimmable
                @mouseenter.native="slide.active = true"
                @mouseleave.native="slide.active = false"
        >
          <sui-image :src="image"/>
          <sui-dimmer blurring :active="slide.active">
            <sui-button inverted @click="openSelectedProject(slide._id)">Open page</sui-button>
          </sui-dimmer>
        </sui-dimmer-dimmable>
        <sui-card-content>
          <sui-card-header>{{slide.mainParams[0].name}}</sui-card-header>
          <sui-card-meta>Created {{slide.created | dateConverter | dateFormat('DD/MM/YYYY')}}</sui-card-meta>
        </sui-card-content>
      </sui-card>
    </sui-card-group>
  </section>

</template>

<script lang="ts">
    import {Vue, Component, Watch, Model} from 'vue-property-decorator';
    import VueFilterDateFormat from 'vue-filter-date-format';

    Vue.use(VueFilterDateFormat);
    import {Project} from '@/components/Types';

    // Vue.filter('getImage', (image) => {
    //     debugger
    //     // return require(image)
    //     return image.replace(/["]+/g, '')
    // });

    Vue.filter('dateConverter', (val) => new Date(val));

    @Component({
        components: {},
        directives: {}
    })
    export default class Slides extends Vue {
        private image: string = require('../assets/img/body6.jpg');
        private slides: Project[] = [];

        mounted(): void {
            // debugger
            // this.$store.state.projects.forEach((project): void => {
            //     project.image = require(project.image);
            // });
            // this.$store.state.projects[0].created = new Date();
            this.slides = this.$store.state.projects;

            // this.slides[0].image =  require('../assets/img/body.jpg');
            // this.$store.dispatch('SAVE_PROJECT', this.slides[0]);
        }

        private openSelectedProject(id): void {
            this.$router.push({name: 'projectPage', params: {id}});
        }
    }
</script>

<style scoped lang="scss">
  .slides {
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

    .ui.three.cards {
      margin: 0;

      .card {
        width: 100%;
        margin: 5% 8%;

        .image {
          border-radius: 4px 4px 0 0;
        }
      }
    }
  }
</style>
