<template lang="html">

  <section class="add-information">
    <sui-button @click.native="toggle" :icon="params.length ? 'edit': 'add'" color="yellow"/>
    <sui-modal v-model="open">
      <sui-modal-content>
        <sui-form>
          <sui-form-fields fields="three">
            <sui-form-field>
              <label>Length: </label>
              <input type="number" v-model='params.length' placeholder="Length" min="0" />
            </sui-form-field>
            <sui-form-field>
              <label>Width: </label>
              <input type="number" v-model='params.width' placeholder="Width" min="0" />
            </sui-form-field>
            <sui-form-field>
              <label>Height: </label>
              <input type="number" v-model='params.height' placeholder="Height" min="0" />
            </sui-form-field>
          </sui-form-fields>
        </sui-form>
      </sui-modal-content>
      <sui-modal-actions>
        <sui-button color="teal" @click.native="toggle">
          OK
        </sui-button>
      </sui-modal-actions>
    </sui-modal>
  </section>

</template>

<script lang="ts">

    import {Vue, Component, Prop, Watch, Model} from 'vue-property-decorator';

    @Component({
        components: {},
        directives: {}
    })
    export default class AddInformation extends Vue {
        @Prop() private readonly params: Object;

        private open: boolean = false;

        private toggle(): void {
            this.open = !this.open;
        }
    }
</script>

<style scoped lang="scss">
  .add-information {
    /deep/.ui.standard.modal {
      width: 200px !important;

      .content {
        padding: 10px;

        .fields {
          display: inline-block;
          margin: 0;

          .field {
            width: 100%;
            margin-bottom: 10px;

            label {
              display: inline-block;
              width: 40%;
              padding: 10px 0;
            }

            input {
              width: 60%;
            }
          }
        }
      }

      .actions  {
        padding: 10px;
      }
    }
  }
</style>
