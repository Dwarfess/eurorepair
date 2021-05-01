<template lang="html">

  <section class="service-editor" @click.stop>
    <sui-button @click.native="toggleEditor" :icon="cloneService.id ? 'edit': 'add'" color="yellow"/>
    <sui-modal v-model="openEditor">
      <sui-modal-content>
        <sui-form v-if="cloneService">
          <sui-form-fields fields="three">
            <sui-form-field>
              <label>Type: </label>
              <sui-dropdown
                      selection
                      :options="serviceTypes"
                      v-model="type"
              />
            </sui-form-field>
            <sui-form-field>
              <label>Name: </label>
              <input type="text" v-model='cloneService.name' placeholder="Name" min="0" required/>
            </sui-form-field>

            <sui-form-field>
              <label>Price, ₴: </label>
              <input type="number" v-model='cloneService.price' placeholder="Price" min="1" required/>
            </sui-form-field>

            <sui-form-field>
              <label>Description:</label>
              <textarea rows="2" v-model='cloneService.description'></textarea>
            </sui-form-field>
          </sui-form-fields>
        </sui-form>
      </sui-modal-content>
      <div is="sui-button-group">
        <sui-button color="teal" @click.native="applyChanges">OK</sui-button>
        <sui-button-or/>
        <sui-button color="yellow" @click.native="cancelChanges">Cancel</sui-button>
        <sui-button-or/>
        <sui-button @click.native="deleteService" :disabled="!service.id">Delete</sui-button>
      </div>
    </sui-modal>
  </section>

</template>

<script lang="ts">
    import {Vue, Component, Prop, Watch, Model} from 'vue-property-decorator';

    import $ from 'jquery';

    import {Service, ServiceType} from '@/components/Types';

    @Component({
        components: {},
        directives: {}
    })
    export default class ServiceEditor extends Vue {
        @Prop() private readonly service: Service;

        private cloneService: Service;

        private openEditor: boolean = false;
        private type: string = 'other';
        private readonly serviceTypes: ServiceType[] = this.$store.state.serviceTypes;

        created(): void {
            this.createCloneParams();
            this.type = this.cloneService.type || 'other';
        }

        private toggleEditor(): void {
            this.openEditor = !this.openEditor;

            !this.service.id && this.createCloneParams();
        }

        private applyChanges(): void {
            this.cloneService.type = this.type;
            this.cloneService.id = Math.trunc(new Date().getTime() * Math.random());
            this.$emit('changeService', this.cloneService);
            this.toggleEditor();
        }

        private cancelChanges(): void {
            this.toggleEditor();
        }

        private deleteService() {
            this.$emit('deleteService', this.cloneService.id);
            this.toggleEditor();
        }

        private createCloneParams(): void {
            this.cloneService = this.service.id ? Object.assign({}, this.service) : this.getNewService();
        }

        private getNewService(): Service {
            return {
                id: 0,
                type: 'assembling',
                name: 'Обои',
                category: 'Отделочные',
                description: 'Поклейка обоев',
                price: 60
            }
        }
    }
</script>

<style scoped lang="scss">
  .service-editor {
    /deep/ .ui.standard.modal {
      width: 258px !important;

      &>.bottom {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }

      .content, .buttons {
        padding: 10px;

        .fields {
          display: inline-block;
          margin: 0;

          .field {
            width: 100%;
            margin-bottom: 10px;

            .menu {
              background: white;

              .item {
                &.active {
                  border-bottom: none;
                }
              }
            }

            label {
              display: inline-block;
              width: 40%;
              padding: 10px 0;
            }

            input, .selection.dropdown {
              width: 60%;
              min-width: 60%;

              .dropdown.icon {
                top: 8px;
              }
            }
          }
        }
      }

      .actions {
        padding: 10px;
      }

      .button {
        font-size: 14px;
      }
    }
  }
</style>
