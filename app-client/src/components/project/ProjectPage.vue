<template lang="html">

  <section class="project-page">
    <h1>project-page Component</h1>
    <div class="project-canvas">

    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'project-page',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  @import '../../variables';

  .project-page {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 10px;

    h1 {
      color: $mainColor;
      height: 20%;
      margin:0;
    }

    .project-canvas {
      width: 70%;
      height: 80%;
      border: 1px solid $subColor;
      border-radius: 5px;
    }
  }
</style>
