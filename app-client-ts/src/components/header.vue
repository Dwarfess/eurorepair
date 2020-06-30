<template lang="html">

    <section class="src-components-header">
        <h1>Page not found</h1>
        <h2>Command:</h2>
        <p></p>
    </section>

</template>

<script lang="js">

    export default {
        name: 'src-components-header',
        props: {
            msg: String
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
        width: 100%;
        box-shadow: 0 0 10px 0 black;
        color: #00B7FF;

        h1 {
            padding-top: 20%;
        }
    }
</style>
