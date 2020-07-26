<template lang="html">

  <section class="add-information" @click.stop>
    <sui-button @click.native="toggleEditor" :icon="editorParams.id ? 'edit': 'add'" color="yellow"/>
    <sui-modal v-model="openEditor">
      <sui-modal-content>
        <sui-form>
          <sui-form-fields fields="three">
            <sui-form-field v-if="category !== 'mainParam'">
              <label>Category: </label>
              <sui-dropdown
                      selection
                      :options="categories"
                      v-model="category"
              />
            </sui-form-field>
            <sui-form-field>
              <label>Name: </label>
              <input type="text" v-model='editorParams.name' placeholder="Name" min="0" required/>
            </sui-form-field>
            <sui-form-field>
              <label>Length: </label>
              <input type="number" v-model='editorParams.length' placeholder="Length" min="1" required/>
            </sui-form-field>
            <sui-form-field>
              <label>Width: </label>
              <input type="number" v-model='editorParams.width' placeholder="Width" min="1" required/>
            </sui-form-field>
            <sui-form-field>
              <label>Height: </label>
              <input type="number" v-model='editorParams.height' placeholder="Height" min="1" required/>
            </sui-form-field>
          </sui-form-fields>
        </sui-form>
      </sui-modal-content>
      <div is="sui-button-group">
        <sui-button color="teal" @click.native="applyChanges">Ok</sui-button>
        <sui-button-or/>
        <sui-button color="yellow" @click.native="cancelChanges">Cancel</sui-button>
        <sui-button-or/>
        <sui-button @click.native="deleteChanges" :disabled="category === 'mainParam' || !editorParams.id">Delete</sui-button>
      </div>
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
    export default class EditInformation extends Vue {
        @Prop() private readonly params: ProjectItem;

        private editorParams: ProjectItem;
        private openEditor: boolean = false;
        private category: string = 'room';
        private readonly categories: Category[] = this.$store.state.categories;

        created(): void {
            this.createCloneParams();
            this.category = this.editorParams.category || 'room';
        }

        private toggleEditor(): void {
            this.openEditor = !this.openEditor;
        }

        private applyChanges(): void {
            this.editorParams.category = this.category;

            const category = this.getCategory(this.editorParams.category);
            const id = this.editorParams.id;

            if (this.editorParams.category === this.params.category) {
                const index = category.map((item) => item.id).indexOf(id);

                category[index].name = this.editorParams.name;
                category[index].category = this.editorParams.category;
                category[index].length = this.editorParams.length;
                category[index].width = this.editorParams.width;
                category[index].height = this.editorParams.height;
            } else if (id) {
                const oldCategory = this.getCategory(this.params.category);
                const index = oldCategory.map((item) => item.id).indexOf(id);

                oldCategory.splice(index, 1);
                category.push(this.editorParams);
            } else {
                this.editorParams.id = Math.trunc(new Date().getTime() * Math.random());

                category.push(this.editorParams);
                this.editorParams = this.resetParams();
            }

            this.toggleEditor();
        }

        private getCategory(category): ProjectItem[] {
            const currentProject = this.$store.state.projects.find((project) => project._id === this.$route.params.id
                || project._tempId);

            return currentProject[`${category}s`];
        }

        private cancelChanges(): void {
            this.createCloneParams();
            this.toggleEditor();
        }

        private deleteChanges() {
            const category = this.getCategory(this.params.category);
            const index = category.map((item) => item.id).indexOf(this.editorParams.id);

            category.splice(index, 1);

            this.editorParams = this.resetParams();
            this.toggleEditor();
        }

        private createCloneParams(): void {
            this.editorParams = this.params.id ? Object.assign({}, this.params) : this.resetParams();
        }

        private resetParams(): ProjectItem {
            this.category = 'room';
            return {
                id: 0,
                name: 'new',
                category: 'room',
                length: 1,
                width: 1,
                height: 1
            }
        }
    }
</script>

<style scoped lang="scss">
  .add-information {
    /deep/ .ui.standard.modal {
      width: 258px !important;

      .content, .buttons {
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
