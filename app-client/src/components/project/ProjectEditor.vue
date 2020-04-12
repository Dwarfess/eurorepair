<template lang="html">

  <section class="project-editor">
    <h1>Information</h1>
    <div class="main_params">
      <AddInformation></AddInformation>
    </div>
  </section>

</template>

<script lang="js">
    import AddInformation from "./AddInformation";

    export default {
        name: 'project-editor',
        components: {
            AddInformation
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
  @import "../../variables";

  .project-editor {
    width: 30%;
    height: 30%;
    padding: 0 10px;
    float: left;
    color: $mainColor;
    text-align: right;
  }
</style>
