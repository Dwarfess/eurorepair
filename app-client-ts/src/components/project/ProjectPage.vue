<template lang="html">

  <section class="project">
    <div class="project_article">
      <div class="project_article_name">
        <div class="ui right labeled left icon input">

          <i class="tags icon"></i>
          <input type="text" placeholder="Enter name">
          <a class="ui tag label">edit</a>
        </div>
      </div>
      <div class="project_article_canvas">

      </div>
      <ProjectEditor></ProjectEditor>
    </div>

    <div class="project_footer">
      <div is="sui-button-group">
        <sui-button size="large" color="teal">Save</sui-button>
        <sui-button-or size="large"/>
        <sui-button size="large" color="yellow">Reset</sui-button>
        <sui-button-or size="large"/>
        <sui-button size="large">Default</sui-button>
      </div>
    </div>
  </section>

</template>

<script lang="js">
    import ProjectEditor from "./ProjectEditor";

    export default {
        name: 'project-page',
        components: {
            ProjectEditor
        },
        props: [],
        mounted() {

        },
        data() {
            return {}
        },
        methods: {},
        computed: {}
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
