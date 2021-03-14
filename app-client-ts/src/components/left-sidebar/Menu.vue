<template lang="html">

  <section class="sidebar-menu">
    <sui-segment>
      <sui-checkbox label="visible" v-model="visible"/>
    </sui-segment>
    <sui-sidebar-pushable>
      <sui-menu
              is="sui-sidebar"
              :visible="visible"
              animation="overlay"
              width="thin"
              icon="labeled"
              inverted
              vertical
      >
        <sui-menu-item to="/">
          <sui-icon name="home"/>
          Home
        </sui-menu-item>
        <sui-menu-item to="/price" @click="navigate('/price')">
          <sui-icon name="gamepad"/>
          Price
        </sui-menu-item>
        <sui-menu-item to="/">
          <sui-icon name="camera"/>
          Channels
        </sui-menu-item>
      </sui-menu>
    </sui-sidebar-pushable>
  </section>

</template>

<script lang="ts">
    import {Vue, Component, Watch, Model} from 'vue-property-decorator';

    @Component({
        components: {},
        directives: {}
    })
    export default class Menu extends Vue {
      private visible: boolean = true;

      private navigate(path) {
          this.$router.push(path)
      }
    }
</script>

<style scoped lang="scss">
  @import '../../variables';

  .sidebar-menu {
    .segment {
      /*border: none;*/
      box-shadow: none;
      background: none;

      .ui.checkbox {
        /deep/ label {
          font-family: Icons;
          color: $subBgColor;

          &:before {
            content: "\f0c9";
            width: 0;
            height: 0;
            left: 13px;
            font-size: 40px;
            border: none;
            color: $mainColor;
          }

          &:after {
            left: -100px;
          }
        }
      }
    }

    .pushable {
      height: 215px;
      margin-top: 40px;

      .left.sidebar {
        width: 100%;
        background: none;

        .item {
          width: 100%;
          color: $mainColor;

          &:hover {
            background: $subColor;
            color: $subBgColor;
            cursor: pointer;
            transition-duration: .5s;
          }
        }
      }
    }
  }
</style>
