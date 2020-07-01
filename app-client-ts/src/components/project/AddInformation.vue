<template lang="html">

  <section class="add-information" @click.stop>
    <sui-button @click.native="toggleEditor" :icon="editorParams.length ? 'edit': 'add'" color="yellow"/>
    <sui-modal v-model="openEditor">
      <sui-modal-content>
        <sui-form>
          <sui-form-fields fields="three">
            <sui-form-field>
              <label>State: </label>
              <sui-dropdown
                      placeholder="State"
                      selection
                      :options="categories"
                      v-model="category"
              />
            </sui-form-field>
            <sui-form-field>
              <label>Name: </label>
              <input type="text" v-model='editorParams.name' placeholder="Name" min="0"/>
            </sui-form-field>
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
        <sui-button color="teal" @click.native="applyChanges">Ok</sui-button>
        <sui-button color="yellow" @click.native="cancelChanges">Cancel</sui-button>
      </sui-modal-actions>
    </sui-modal>
  </section>

</template>

<script lang="ts">
    import {Vue, Component, Prop, Watch, Model} from 'vue-property-decorator';
    import $ from 'jquery';

    import {ProjectItem, Category} from '@/components/Types';

    @Component({
        components: {},
        directives: {}
    })
    export default class AddInformation extends Vue {
        @Prop() private readonly params: ProjectItem;

        private editorParams: ProjectItem;
        private openEditor: boolean = false;
        private category: string = 'room';
        private readonly categories: Array<Category> = this.$store.state.categories;

        created(): void {
            this.createCloneParams();
            this.category = this.editorParams.category ? this.editorParams.category : 'kitchen';
        }

        private toggleEditor(): void {
            this.openEditor = !this.openEditor;
            console.log(this.category);
        }

        private applyChanges(): void {
            const category = this.$store.state.projectParams[`${this.editorParams.category}s`];
            const index = category.map((item) => item.id).indexOf(this.editorParams.id);
            console.log(this.category);
            category[index].name = this.editorParams.name;
            category[index].type = this.editorParams.category = this.category;
            category[index].length = this.editorParams.length;
            category[index].width = this.editorParams.width;
            category[index].height = this.editorParams.height;
            console.log(this.editorParams.category, 'this.editorParams.category');
            console.log(this.category);
            this.toggleEditor();
        }

        private cancelChanges(): void {
            this.createCloneParams();
            this.toggleEditor();
        }

        private createCloneParams(): void {
            this.editorParams = Object.assign({}, this.params);
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
    }
  }
</style>
