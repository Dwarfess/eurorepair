<template lang="html">

  <section class="main-video">
    <div class="description">
      <h2>Guide</h2>
      <p>Short video showing how to use this application</p>
    </div>

    <div class="video">
      <sui-embed
              id="O6Xo21L0ybE"
              :placeholder="image"
              source="youtube"
      />
    </div>
  </section>

</template>

<script lang="ts">
    import {Vue, Component, Watch, Model} from 'vue-property-decorator';

    @Component({
        components: {},
        directives: {}
    })
    export default class MainVideo extends Vue {
        private image: any = require('../assets/img/main-video.jpg');
    }
</script>

<style scoped lang="scss">
  @import '../variables';

  .main-video {
    width: 35%;
    margin-top: 550px;
    padding-left: 4%;
    float: left;

    h2 {
      font-size: 50px;
      font-weight: inherit;
      margin: 0;
      text-transform: uppercase;
      text-align: left;
      color: $subColor;
    }

    .description {
      margin-bottom: 20px;

      p {
        letter-spacing: 2px;
        text-align: left;
        line-height: 24px;
        color: $subColor;
      }
    }

    .video {
      border: 2px solid $subColor;
      border-radius: 5px;

      .embed {
        border-radius: 3px;
      }
    }
  }
</style>
