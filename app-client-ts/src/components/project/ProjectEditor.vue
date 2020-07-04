<template lang="html">

  <section class="project-editor">
    <h2>Information</h2>

    <div class="project_params" v-for="category in projectParams">
      <div class="sectors" v-for="room in category" :key="room.id">
        <div class="sector_params">
          <sui-accordion>
            <sui-accordion-title>
              <h3 v-if="room.category !== 'mainParam'">
                <span class="category">{{room.category}}</span> - {{room.name}}
                <sui-icon name="dropdown"/>
              </h3>
              <h3 v-else>Main Params
                <sui-icon name="dropdown"/>
              </h3>

              <div class="add_edit_information_wrapper">
                <EditInformation :params="room"></EditInformation>
              </div>
            </sui-accordion-title>

            <sui-accordion-content>
              <div class="length param">
                <span class="param_title">Length: </span>
                <span class="param_value">{{room.length}}</span>
              </div>
              <div class="width param">
                <span class="param_title">Width: </span>
                <span class="param_value">{{room.width}}</span>
              </div>
              <div class="height param">
                <span class="param_title">Height: </span>
                <span class="param_value">{{room.height}}</span>
              </div>
            </sui-accordion-content>
          </sui-accordion>
        </div>
      </div>
    </div>

    <div class="add_edit_information_wrapper ">
      <EditInformation :params="{}"></EditInformation>
    </div>
  </section>

</template>

<script lang="ts">
    import {Vue, Component, Watch, Model} from 'vue-property-decorator';

    import {Project} from '@/components/Types';
    import EditInformation from '@/components/project/EditInformation.vue';

    @Component({
        components: {
            EditInformation
        },
        directives: {}
    })
    export default class ProjectPage extends Vue {
        private projectParams: Project = this.$store.state.projectParams;
    }
</script>

<style scoped lang="scss">
  @import "../../variables";

  .project-editor {
    width: 30%;
    height: 30%;
    padding: 0 10px;
    float: left;
    color: $mainColor;
    text-align: right;

    .add_edit_information_wrapper {
      float: right;
      margin: 5px 0;
    }

    .main_params, .sector_params {
      float: left;
      text-align: left;
      width: 100%;

      .accordion {
        border-bottom: 2px solid $subColor;

        .title {
          padding: 0;

          &:after {
            content: '.';
            display: block;
            height: 0;
            clear: both;
            visibility: hidden;
          }

          h3 {
            float: left;
            color: $subColor;
            margin: 10px 0 0 0;

            .category {
              text-transform: capitalize;
            }
          }
        }

        .content {
          padding: 0;
        }
      }

      .param {
        padding: 5px;
        font-size: 16px;

        &_title {
          width: 100px;
          display: inline-block;
        }

        &_value {
          font-weight: bold;
        }
      }
    }
  }
</style>
