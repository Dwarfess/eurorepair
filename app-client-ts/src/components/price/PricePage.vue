<template lang="html">

  <section class="price-page">
    <sui-menu class="services_header" pointing>
      <h3>
        <span>Services </span>
        <span>list</span>
      </h3>
      <sui-menu-menu class="search" position="right">
        <sui-menu-item>
          <sui-input transparent icon="search" placeholder="Search..." />
        </sui-menu-item>
      </sui-menu-menu>
      <sui-button color="yellow" size="large" inverted circular icon="print" />
    </sui-menu>

    <sui-tab class="tabs"
             :menu="{
        color: 'yellow',
        inverted: true,
        attached: false,
        tabular: false,
      }"
    >
      <sui-tab-pane icon="users" class="all" title="all" label="14" :attached="false" v-if="services">
        <!--insert table into tab-->
        <sui-table selectable celled inverted v-for="(category, index) in services" :key="index">
          <sui-table-header>
            <sui-table-row>
              <sui-table-header-cell class="service">Service</sui-table-header-cell>
              <sui-table-header-cell class="category">Category</sui-table-header-cell>
              <sui-table-header-cell class="description">Description</sui-table-header-cell>
              <sui-table-header-cell class="price" text-align="right">Price</sui-table-header-cell>
              <sui-table-header-cell class="action" text-align="right">Action</sui-table-header-cell>
            </sui-table-row>
          </sui-table-header>

          <sui-table-body>
            <sui-table-row v-for="service in category.list" :key="service.id">
              <sui-table-cell class="service">{{service.name}}</sui-table-cell>
              <sui-table-cell class="category">{{service.category}}</sui-table-cell>
              <sui-table-cell class="description">{{service.description}}</sui-table-cell>
              <sui-table-cell class="price" text-align="right">{{service.price}}</sui-table-cell>

              <sui-table-cell class="action" text-align="right">
                <sui-button-group size="tiny">
                  <sui-button color="yellow" icon="edit" />
                  <sui-button-or />
                  <sui-button icon="delete" />
                </sui-button-group>
              </sui-table-cell>

            </sui-table-row>
          </sui-table-body>
        </sui-table>

      </sui-tab-pane>
      <sui-tab-pane icon="users" class="assembling" title="assembling" label="14" :attached="false">
        assembling
      </sui-tab-pane>
      <sui-tab-pane icon="users" class="disassembling" title="disassembling" label="14" :attached="false">
        disassembling
      </sui-tab-pane>
      <sui-tab-pane icon="users" class="special" title="special" label="14" :attached="false">
        special
      </sui-tab-pane>
      <sui-tab-pane icon="users" class="other" title="other" label="14" :attached="false">
        other
      </sui-tab-pane>
    </sui-tab>

  </section>

</template>

<script lang="ts">
    import {Vue, Component, Watch, Model} from 'vue-property-decorator';

    @Component({
        components: {},
        directives: {}
    })
    export default class PricePage extends Vue {
        private services: {};

        beforeCreate(): void {
            this.services = this.$store.state.defaultServices;
        }
    }
</script>

<style scoped lang="scss">
  @import '../../variables';

  .price-page {
    padding: 10px;
    height: calc(100% - 31px); //footer 31px

    .services_header {
      background: none;
      box-shadow: none;
      margin-bottom: 5px;

      &:after {
        //@include clearfix;
      }

      h3 {
        margin: 15px 0 0 0;

        span {
          text-transform: uppercase;

          &:nth-of-type(1) {
            color: $thirdColor;
            font-weight: bold;
          }

          &:nth-of-type(2) {
            color: $subColor;
          }
        }
      }

      .search {
        background: white;
        border-radius: 4px;
      }

      .button {
        padding: 11px;
        margin-left: 10px;
      }
    }

    .tabs {
      height: calc(100% - 50px); //services_header - 40px, general padding - 10px
      /deep/.menu {
        background: none;
        maggin-bottom: 25px;

        .item {
          &.active {
            border-bottom: 2px solid $subColor;
          }
        }
      }

      .tab {
        background: none;
        padding: 0;
        height: calc(100% - 72px); //menu - 47px, margin-bottom - 25px
        overflow: auto;

        .table {
          background: none;
          box-shadow: 0px 0px 10px 1px black;

          .service {width: 150px}
          .category {width: 150px}
          .action {width: 90px}
          .price {
            width: 90px;
            font-weight: bold;
          }

          th, td {
            color: lighten($subBgColor, 40%) !important;
          }
        }
      }
    }
  }
</style>
