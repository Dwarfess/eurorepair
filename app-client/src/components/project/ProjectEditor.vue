<template lang="html">

  <section class="project-editor">
    <h2>Information</h2>

    <div class="main_params">
      <sui-accordion>
        <sui-accordion-title>
          <h3>{{testProject.mainParams.name}}
            <sui-icon name="dropdown"/>
          </h3>

          <div class="add_edit_information_wrapper">
            <AddInformation :params="testProject.mainParams"></AddInformation>
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

    <div class="sectors" v-for="room in testProject.rooms" :key="room.id">
      <div class="sector_params">
        <sui-accordion>
          <sui-accordion-title>
            <h3>{{room.name}}
              <sui-icon name="dropdown"/>
            </h3>

            <div class="add_edit_information_wrapper">
              <AddInformation :params="room"></AddInformation>
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

    <div class="add_edit_information_wrapper">
      <AddInformation></AddInformation>
    </div>
  </section>

</template>

<script lang="js">
    import AddInformation from "./AddInformation";

    const testProject = {
        mainParams: {
            name: 'Main information',
            length: 20,
            width: 30,
            height: 3
        },
        rooms: [
            {
                id: new Date().getTime() * Math.random(),
                name: 'test1',
                type: '',
                length: 20,
                width: 30,
                height: 4
            },
            {
                id: new Date().getTime() * Math.random(),
                name: 'test2',
                type: '',
                length: 10,
                width: 20,
                height: 4
            }
        ]
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

    .main_params, .sector_params {
      float: left;
      text-align: left;
      width: 100%;

      .accordion {
        border-bottom: 2px solid $subColor;

        .title {
          padding: 5px 0;

          &:after {
            content: '.';
            display: block;
            height: 0;
            clear: both;
            visibility: hidden;
          }

          .add_edit_information_wrapper {
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
