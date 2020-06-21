<template>
  <div id="app">
    <LeftSidebar></LeftSidebar>

    <div class="mainContainer">
      <router-view></router-view>
    </div>

    <div class="footer">
      <div class="border-gradient"></div>
      <span class="copyright">Copyright ©</span>
    </div>
  </div>
</template>

<script>
    import LeftSidebar from './components/left-sidebar/LeftSidebar.vue';

    export default {
        name: 'app',
        components: {
            LeftSidebar
        }
    }
</script>

<style lang="scss">
  @import './_variables.scss';

  body {
    background-color: lightgrey;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    width: 100%;
    margin: 0;
    position: relative;

    .mainContainer {
      margin: 0 100px 0 200px;
      height: 100%;
      background: $subBgColor;
    }

    .footer {
      position: absolute;
      bottom: 0;
      left: 210px;
      right: 110px;
      text-align: right;

      .border-gradient {
        width: 100%;
        padding: 1px;
        background: linear-gradient(
                        to right,
                        $mainColor,
                        $mainColor,
                        $mainColor,
                        $mainColor,
                        rgba(0, 0, 0, 0.1),
                        rgba(0, 0, 0, 0),
                        rgba(0, 0, 0, 0),
                        rgba(0, 0, 0, 0.1),
                        $subColor,
                        $subColor,
                        $subColor
        );
      }

      .copyright {
        color: $subColor;
        margin: 5px 0;
        display: inline-block;
      }
    }
  }
</style>
