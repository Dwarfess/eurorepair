<template lang="html">

  <section class="add-information" @click.stop>
    <sui-button @click.native="toggleEditor" :icon="editorParams.length ? 'edit': 'add'" color="yellow"/>
    <sui-modal v-model="openEditor">
      <sui-modal-content>
        <sui-form>
          <sui-form-fields fields="three">
            <sui-form-field>
              <label>Length: </label>
              <input type="number" v-model='editorParams.length' placeholder="Length" min="0"/>
            </sui-form-field>
            <sui-form-field>
              <label>Width: </label>
              <input type="number" v-model='editorParams.width' placeholder="Width" min="0"/>
            </sui-form-field>
            <sui-form-field>
              <label>Height: </label>
              <input type="number" v-model='editorParams.height' placeholder="Height" min="0"/>
            </sui-form-field>
          </sui-form-fields>
        </sui-form>
      </sui-modal-content>
      <sui-modal-actions>
        <sui-button color="teal" @click.native="applyChanges">
          OK
        </sui-button>
      </sui-modal-actions>
    </sui-modal>
  </section>

</template>

<script lang="ts">
    import {Vue, Component, Prop, Watch, Model} from 'vue-property-decorator';
    import $ from 'jquery';

    import {ProjectItem} from '@/components/Types';

    @Component({
        components: {},
        directives: {}
    })
    export default class AddInformation extends Vue {
        @Prop() private params: ProjectItem;

        private editorParams: ProjectItem = Object.assign({}, this.params);
        private openEditor: boolean = false;

        private toggleEditor(): void {
            this.openEditor = !this.openEditor;
            console.log(this.$store.state.projectParams);
        }

        private applyChanges(): void {

            const category = this.$store.state.projectParams[`${this.editorParams.type}s`];
            console.log(this.editorParams.type);
            console.log(category);
            const index = category.map((item) => item.id).indexOf(this.editorParams.id);
            console.log(this.editorParams.id);
            console.log(index);
            category[index].height = this.editorParams.height;

            this.openEditor = !this.openEditor;
            console.log(this.$store.state.projectParams);
        }
    }
</script>

<style scoped lang="scss">
  .add-information {
    /deep/ .ui.standard.modal {
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

      .actions {
        padding: 10px;
      }
    }
  }
</style>
