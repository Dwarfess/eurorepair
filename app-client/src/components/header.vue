<template lang="html">

    <section class="src-components-header">
        <Slide></Slide>
    </section>

</template>

<script lang="js">
    import Slide from './Slide.vue';

    export default {
        name: 'src-components-header',
        components: {
            Slide
        },
        props: {
            msg: String
        },
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
    .src-components-header {
        width: 300px;
        height: 100%;
        margin: 0 50%;
        background-color: rgba(200, 198, 89, 0.3);
        box-shadow: 0 0 10px 0 black;
    }
</style>
