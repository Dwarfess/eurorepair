<template>
    <div id="app">
        <Home></Home>
    </div>
</template>

<script>
    import Home from './components/Home.vue';

    export default {
        name: 'app',
        components: {
            Home
        }
    }
</script>

<style>
    body {
        height: 100vh;
        margin: 0;
        background-color: lightgrey;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100%;
        width: 80%;
        margin: 0 auto;
        background: url("./assets/img/body6.jpg") no-repeat top center;
        background-size: cover;
    }
</style>
