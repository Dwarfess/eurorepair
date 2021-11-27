<template lang="html">

  <section class="service-page">
    <sui-menu class="services-header" pointing>
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

    <sui-tab class="services-tabs" v-if="serviceList"
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
            <sui-table-row v-if="type === 'all' || type === service.type" v-for="(service, index) in serviceList" :key="service.id">
              <sui-table-cell class="service">{{service.name}}</sui-table-cell>
              <sui-table-cell class="category">{{service.category}}</sui-table-cell>
              <sui-table-cell class="description">{{service.description}}</sui-table-cell>
              <sui-table-cell class="price" text-align="right">{{service.price}}</sui-table-cell>

              <sui-table-cell class="action" text-align="right">
                <div is="sui-button-group" size="tiny">
                  <ServiceEditor @changeService="changeService" @deleteService="deleteService" :service="service"></ServiceEditor>
                  <sui-button-or/>
                  <sui-button icon="delete" @click="deleteService(service.id)"/>
                </div>
              </sui-table-cell>

            </sui-table-row>
          </sui-table-body>
        </sui-table>
      </sui-tab-pane>

    </sui-tab>

    <div class="services-footer" v-if="services">
      <div is="sui-button-group">
        <sui-button size="large" color="teal" @click.native="saveServices">Save</sui-button>
        <sui-button-or size="large"/>
        <sui-button size="large" color="yellow" @click.native="resetServices" :disabled="!!services">Reset</sui-button>
        <sui-button-or size="large"/>
        <sui-button size="large" @click.native="toggleDeletionConfirmationDialog" :disabled="!!services">Delete</sui-button>
      </div>

      <div class="add-service">
        <ServiceEditor @changeService="changeService" @deleteService="deleteService" :service="{}"></ServiceEditor>
      </div>
    </div>

    <sui-modal v-model="showDeletionConfirmationDialog">
      <sui-modal-content>
        <p>Are you sure you want to reset service list?</p>
      </sui-modal-content>
      <div is="sui-button-group">
        <sui-button color="teal" @click.native="deleteProject">Confirm</sui-button>
        <sui-button-or/>
        <sui-button color="yellow" @click.native="cancelToDeleteProject">Cancel</sui-button>
      </div>
    </sui-modal>
  </section>

</template>

<script lang="ts">
    import {Vue, Component, Watch, Model} from 'vue-property-decorator';
    import {Service, Services} from "@/components/Types";
    import ServiceEditor from "@/components/service/ServiceEditor.vue";

    @Component({
        components: {
            ServiceEditor
        },
        directives: {}
    })
    export default class ServicePage extends Vue {
        private showDeletionConfirmationDialog: boolean = false;
        // private services: Services = [];
        private serviceList: Service[] = [];
        private servicesTypes: string[];
        private types: string[];
        private search: string = '';

        // @Watch('$store.state.services')
        // private watchProjectParams() {
        //     this.services = this.$store.state.defaultServices;
        // }

        @Watch('search')
        private filterServices() {
            this.serviceList = this.services.serviceList
                .filter((service) => service.name.toLowerCase().includes(this.search.toLowerCase()));
            console.log(this.services);
        }

        @Watch('services')
        private watchServices() {
            console.log(this.services);
        }

        beforeCreate(): void {
            const service_id = '608fe11bd1529616dc713283';

            this.$store.dispatch('GET_SERVICES', service_id);
        }

        created(): void {
            // this.services = this.$store.state.defaultServices;
            this.serviceList = this.services.serviceList;
            this.servicesTypes = this.serviceList.map((service) => service.type);
            this.servicesTypes.unshift('all');
            this.types = this.servicesTypes.filter((item, pos) => this.servicesTypes.indexOf(item) == pos);
        }

        private rerender(): void {

        }

        private getTypeCollectionLength(type): string {
            const filteredServices = this.serviceList.filter((service) => type === 'all' || type === service.type);

            return filteredServices.length.toString();
        }

        private deleteService(id): void {
            const index = this.serviceList.map((service) => service.id).indexOf(id);

            this.serviceList.splice(index, 1);
            // this.$store.state.defaultServices.splice(index, 1);
        }

        private changeService(changedService): void {
            const service = this.serviceList.find((service) => service.id === changedService.id);

            if (service) {
                service.type = changedService.type;
                service.name = changedService.name;
                service.price = changedService.price;
                service.description = changedService.description;

            } else {
                this.serviceList.push(changedService);
            }
        }

        private saveServices(): void {
            this.services.serviceList = this.serviceList;
            if (this.services._id) {
                this.$store.dispatch('UPDATE_SERVICES', this.services);
            } else {
                this.$store.dispatch('CREATE_SERVICES', this.services);
            }
        }

        private resetServices() {

        }

        private toggleDeletionConfirmationDialog() {
            this.showDeletionConfirmationDialog = !this.showDeletionConfirmationDialog;
        }

        private deleteProject() {
            this.$store.dispatch('DELETE_PROJECT', this.services);
        }

        private cancelToDeleteProject() {
            this.toggleDeletionConfirmationDialog();
        }

        private get services(): Services {
            return this.$store.state.defaultServices;
        }
    }
</script>

<style scoped lang="scss">
  @import '../../variables';

  .service-page {
    padding: 10px;
    height: calc(100% - 31px); //footer 31px

    .services-header {
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

    .services-tabs {
      height: calc(100% - 97px); //header - 40px, footer - 52px, general padding - 5px
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
        box-shadow: none;
        border: none;
        padding: 0;
        height: calc(100% - 72px); //menu - 47px, margin-bottom - 25px
        overflow: auto;

        .table {
          background: none;
          border: 1px solid rgba(255,255,255,.1);

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

    .services-footer {
      height: 52px;
      padding-top: 10px;
      text-align: left;

      .add-service {
        float: right;
      }
    }
  }
</style>
