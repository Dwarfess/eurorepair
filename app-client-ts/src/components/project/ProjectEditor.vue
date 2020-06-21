<template lang="html">

  <section class="project-editor">
    <h2>Information</h2>

    <div class="main_params">
      <sui-accordion>
        <sui-accordion-title>
          <h3>Main information
            <sui-icon name="dropdown"/>
          </h3>

          <div class="main_params_add">
            <AddInformation :mainParams="testProject.mainParams"></AddInformation>
          </div>
        </sui-accordion-title>
        <sui-accordion-content>

          <div class="length param">
            <span class="param_title">Length: </span>
            <span class="param_value">{{testProject.mainParams.length}}</span>
          </div>
          <div class="width param">
            <span class="param_title">Width: </span>
            <span class="param_value">{{testProject.mainParams.width}}</span>
          </div>
          <div class="height param">
            <span class="param_title">Height: </span>
            <span class="param_value">{{testProject.mainParams.height}}</span>
          </div>

        </sui-accordion-content>
      </sui-accordion>
    </div>

  </section>

</template>

<script lang="js">
    import AddInformation from "./AddInformation";

    const testProject = {
        mainParams: {
            length: 20,
            width: 30,
            height: 3
        },
        rooms: []
    };

    export default {
        name: 'project-editor',
        components: {
            AddInformation
        },
        props: [],
        mounted() {

        },
        data() {
            return {
                testProject: testProject
            }
        },
        methods: {},
        computed: {}
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

    .main_params {
      float: left;
      text-align: left;
      width: 100%;

      .accordion {
        border-bottom: 2px solid $subColor;

        .title {
          padding: 5px 0;

          &:after{
            content: '.';
            display: block;
            height: 0;
            clear: both;
            visibility: hidden;
          }

          .main_params_add {
            float: right;
          }

          h3 {
            float: left;
            color: $subColor;
            margin: 7px 0 0 0;
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
