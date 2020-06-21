<template lang="html">

  <section class="src-components-left-sidebar">
    <router-link to="/">
      <div class="logo"></div>
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

<script lang="js">
    import Menu from './Menu.vue';

    export default {
        name: 'src-components-left-sidebar',
        components: {
            Menu
        },
        props: [],
        mounted() {

        },
        data() {
            return {}
        },
        methods: {},
        computed: {}
    }


</script>

<style scoped lang="scss">
  @import '../../variables';

  .src-components-left-sidebar {
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
      background: url("../../assets/img/logo.png") no-repeat top center;
      background-size: contain;

      &:hover {
        background-image: url("../../assets/img/logo_hover.png");
        cursor: pointer;
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
