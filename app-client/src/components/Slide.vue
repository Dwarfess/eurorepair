<template lang="html">

    <sui-card>
        <sui-dimmer-dimmable
                @mouseenter.native="cardOneActive = true"
                @mouseleave.native="cardOneActive = false"
        >
            <sui-image :src="images.body"/>
            <sui-dimmer blurring :active="cardOneActive">
                <sui-button inverted>Add Friend</sui-button>
            </sui-dimmer>
        </sui-dimmer-dimmable>
        <sui-card-content>
            <sui-card-header>Team Fu</sui-card-header>
            <sui-card-meta>Create in Sep 2014</sui-card-meta>
        </sui-card-content>
    </sui-card>

</template>

<script lang="js">

    export default {
        name: 'src-components-slide',
        props: [],
        mounted() {

        },
        data() {
            return {
                cardOneActive: false,
                cardTwoActive: false,
                images: {
                    body: require('../assets/img/body.jpg'),
                    body3: require('../assets/img/body3.jpg')
                }
            };
        },
        methods: {},
        computed: {}
    }


</script>

<style scoped lang="scss">
    .card {

    }

</style>
