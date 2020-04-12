<template lang="html">

  <section class="src-components-home">
    <div class="container">
      <div class="left_side">
        <div class="left_side_year">
          <p><span>—</span> 2019</p>
        </div>

        <div class="logo"></div>

        <div class="left_side_text">
          <h2>your own electron</h2>
          <h1>project</h1>
          <p class="left_side_text_description">You have the opportunity to create your own renovation
            project.
            The main idea is to fill the correct dimensions of your current work object
            and get the exact amount of materials needed. And also calculate all your work automatically
            instead of you.
            Just click the button below the text.
          </p>
        </div>

        <div class="left_side_buttons">
          <button class="ui big inverted yellow button" @click="openNewProject">Create new</button>
        </div>

      </div>

      <Slides></Slides>
      <MainVideo></MainVideo>
    </div>
  </section>

</template>

<script lang="js">
    import Slides from './Slides.vue';
    import MainVideo from './MainVideo.vue';

    export default {
        name: 'home',
        components: {
            Slides,
            MainVideo
        },
        props: [],
        mounted() {

        },
        data() {
            return {}
        },
        methods: {
            openNewProject() {
                this.$router.push({ path: `/project` })
            }
        },
        computed: {}
    }


</script>

<style scoped lang="scss">
  @import '../variables';

  .src-components-home {
    margin: 0;
    height: 100%;
    background: url("../assets/img/body6.jpg") no-repeat top center;
    background-size: cover;

    .container {
      height: 100%;
      padding: 0 40px;
      background: linear-gradient(rgba(12, 67, 86, 0.34), rgb(1, 41, 110));

      .left_side {
        float: left;
        color: $mainColor;
        width: 45%;
        padding-right: 10%;

        &_year {
          margin-top: 100px;
          font-weight: bold;
          text-align: left;

          span {
            color: $subColor;
            margin-right: 10px;
          }
        }

        .logo {
          width: 200px;
          height: 200px;
          margin: 100px 0 60px;
          background: url("../assets/img/logo.png") no-repeat top center;
          background-size: contain;

          &:hover {
            background-image: url("../assets/img/logo_hover.png");
            cursor: pointer;
          }
        }

        h1 {
          font-size: 72px;
          margin: 0;
          text-transform: uppercase;
          text-align: left;
        }

        h2 {
          font-size: 25px;
          word-spacing: 22px;
          font-weight: inherit;
          margin: 0;
          text-transform: uppercase;
          text-align: left;
        }

        &_text {
          &_description {
            letter-spacing: 2px;
            text-align: left;
            line-height: 24px;
            color: $mainColor;
            opacity: .7;
          }
        }

        &_buttons {
          text-align: left;
          margin-top: 50px;
        }
      }
    }
  }
</style>
