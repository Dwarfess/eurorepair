<template lang="html">

  <section class="left-sidebar">
    <router-link to="/">
      <div class="logo">
        <div class="layout layout_1"></div>
        <div class="layout layout_2"></div>
        <div class="layout layout_3"></div>
        <div class="logo_title">er</div>
      </div>
    </router-link>

    <Menu></Menu>

    <div class="social_networks">
      <sui-button circular social="facebook" icon="facebook"/>
      <sui-button circular social="twitter" icon="twitter"/>
      <sui-button circular social="linkedin" icon="linkedin"/>
      <sui-button circular social="google plus" icon="google plus"/>
    </div>
  </section>

</template>

<script lang="ts">
    import {Vue, Component, Watch, Model} from 'vue-property-decorator';
    import Menu from './Menu.vue';

    @Component({
        components: {
            Menu
        },
        directives: {}
    })
    export default class LeftSidebar extends Vue {}
</script>

<style scoped lang="scss">
  @import '../../variables';

  .left-sidebar {
    float: left;
    width: 100px;
    height: 100%;
    background: $subBgColor;
    position: relative;

    .logo {
      width: 80%;
      height: 0;
      padding-bottom: 80%;
      margin: 40px auto;

      &_title {
        font-size: 160%;
        margin-top: 32%;
      }
    }

    .social_networks {
      width: 100%;
      position: absolute;
      bottom: 0;

      .button {
        margin: 40px auto;
        display: block;
      }
    }
  }
</style>
