<template>
    <div id="app">
        <LeftSidebar></LeftSidebar>

        <div class="mainContainer">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import LeftSidebar from './components/left-sidebar/LeftSidebar.vue';

    export default {
        name: 'app',
        components: {
            LeftSidebar
        }
    }
</script>

<style>
    body {
        background-color: lightgrey;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100%;
        width: 100%;
        margin: 0;
    }

    .mainContainer {
        margin: 0 100px 0 200px;
        height: 100%;
        background: #2c3e50;
    }
</style>
