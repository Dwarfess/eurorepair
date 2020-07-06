<template lang="html">

  <section class="project" v-if="projectParams.mainParams[0]">
    <div class="project_article">
      <div class="project_article_name">
        <div class="ui right labeled left icon input">

          <i class="tags icon"></i>
          <input type="text" placeholder="Enter name" :value="projectParams.mainParams[0].name" readonly>
          <a class="ui tag label">edit</a>
        </div>
      </div>
      <div class="project_article_canvas">

      </div>
      <ProjectEditor></ProjectEditor>
    </div>

    <div class="project_footer">
      <div is="sui-button-group">
        <sui-button size="large" color="teal" @click.native="saveProject">Save</sui-button>
        <sui-button-or size="large"/>
        <sui-button size="large" color="yellow">Reset</sui-button>
        <sui-button-or size="large"/>
        <sui-button size="large">Default</sui-button>
      </div>
    </div>
  </section>

</template>

<script lang="ts">
    import {Vue, Component, Watch, Model} from 'vue-property-decorator';

    import ProjectEditor from './ProjectEditor';
    import { Project } from '../Types';

    @Component({
        components: {
            ProjectEditor
        },
        directives: {}
    })
    export default class ProjectPage extends Vue {
        private projectParams: Project = this.$store.state.projectParams;

        @Watch("$store.state.projectParams")
        private watchProjectParams() {
            this.projectParams = this.$store.state.projectParams;
        }

        beforeCreate(): void {
            this.$store.dispatch('GET_PROJECT');
        }

        private saveProject() {
            this.$store.dispatch('SAVE_PROJECT', this.projectParams);
        }
    }
</script>

<style scoped lang="scss">
  @import '../../variables';

  .project {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 10px;

    &_article {
      height: calc(100% - 82px);

      &_name {
        color: $mainColor;
        height: 10%;
        margin: 0;
        text-transform: uppercase;
      }

      &_canvas {
        width: 70%;
        height: 90%;
        border: 2px solid $mainColor;
        border-radius: 5px;
        float: left;
      }
    }

    &_footer {
      height: 52px;
      padding-top: 10px;
      text-align: left;
    }
  }
</style>
