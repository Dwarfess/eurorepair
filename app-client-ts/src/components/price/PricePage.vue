<template lang="html">

  <section class="price-page">
    <sui-menu class="services_header" pointing>
      <h3>
        <span>Services </span>
        <span>list</span>
      </h3>
      <sui-menu-menu class="search" position="right">
        <sui-menu-item>
          <sui-input transparent icon="search" v-model="search" placeholder="Search..."/>
        </sui-menu-item>
      </sui-menu-menu>
      <sui-button color="yellow" size="large" inverted circular icon="print"/>
    </sui-menu>

    <sui-tab class="tabs" v-if="services"
             :menu="{
        color: 'yellow',
        inverted: true,
        attached: false,
        tabular: false,
      }"
    >

      <sui-tab-pane :class="type" v-for="(type, index) in types" :key="index" icon="users" :title="type"
                    :label="getTypeCollectionLength(type)" :attached="false">

        <!--insert table into tab-->
        <sui-table selectable celled inverted>
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
            <sui-table-row v-if="type === 'all' || type === service.type" v-for="service in services" :key="service.id">
              <sui-table-cell class="service">{{service.name}}</sui-table-cell>
              <sui-table-cell class="category">{{service.category}}</sui-table-cell>
              <sui-table-cell class="description">{{service.description}}</sui-table-cell>
              <sui-table-cell class="price" text-align="right">{{service.price}}</sui-table-cell>

              <sui-table-cell class="action" text-align="right">
                <sui-button-group size="tiny">
                  <sui-button color="yellow" icon="edit"/>
                  <sui-button-or/>
                  <sui-button icon="delete" @click="deleteService(service.id)"/>
                </sui-button-group>
              </sui-table-cell>

            </sui-table-row>
          </sui-table-body>
        </sui-table>
      </sui-tab-pane>

    </sui-tab>
  </section>

</template>

<script lang="ts">
    import {Vue, Component, Watch, Model} from 'vue-property-decorator';
    import {Service} from "@/components/Types";

    @Component({
        components: {},
        directives: {}
    })
    export default class PricePage extends Vue {
        private services: Service[];
        private servicesTypes: string[];
        private types: string[];
        private search: string = '';

        @Watch('search')
        private filterServices() {
            this.services = this.$store.state.defaultServices
                .filter((service) => service.name.toLowerCase().includes(this.search.toLowerCase()));
        }

        beforeCreate(): void {
            this.services = this.$store.state.defaultServices;
            this.servicesTypes = this.services.map((service) => service.type);
            this.servicesTypes.unshift('all');
            this.types = this.servicesTypes.filter((item, pos) => this.servicesTypes.indexOf(item) == pos);
        }

        private getTypeCollectionLength(type) {
            const filteredServices = this.services.filter((service) => type === 'all' || type === service.type);
            return filteredServices.length.toString();
        }

        private deleteService(id) {
            const index = this.services.map((item) => item.id).indexOf(id);

            this.services.splice(index, 1);
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
      /deep/ .menu {
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
          /*box-shadow: 0px 0px 10px 1px black;*/

          .service {
            width: 150px
          }

          .category {
            width: 150px
          }

          .action {
            width: 90px
          }

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
