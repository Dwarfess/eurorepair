<template lang="html">

    <section class="src-components-slides">
        <sui-card-group :items-per-row="3">
            <sui-card v-for="slide of slides" v-bind:key="slide.id">
                <sui-dimmer-dimmable
                        @mouseenter.native="slide.active = true"
                        @mouseleave.native="slide.active = false"
                >
                    <sui-image :src="slide.image"/>
                    <sui-dimmer blurring :active="slide.active">
                        <sui-button inverted>Open page</sui-button>
                    </sui-dimmer>
                </sui-dimmer-dimmable>
                <sui-card-content>
                    <sui-card-header>{{slide.name}}</sui-card-header>
                    <sui-card-meta>Create in Sep 2014</sui-card-meta>
                </sui-card-content>
            </sui-card>
        </sui-card-group>
    </section>

</template>

<script lang="js">
    // import Slide from './Slide.vue';

    export default {
        name: 'src-components-slides',
        components: {
            // Slide
        },
        props: [],
        mounted() {

        },
        data() {
            return {
                // cardOneActive: false,

                slides: [
                    {
                        id: 1,
                        name: 'Archive',
                        image: require('../assets/img/body.jpg'),
                        link: '/archive',
                        active: false
                    }, {
                        id: 2,
                        name: 'Archive',
                        image: require('../assets/img/body2.jpg'),
                        link: '/archive',
                        active: false
                    }, {
                        id: 3,
                        name: 'Archive',
                        image: require('../assets/img/body3.jpg'),
                        link: '/archive',
                        active: false
                    }, {
                        id: 4,
                        name: 'Archive',
                        image: require('../assets/img/body4.jpg'),
                        link: '/archive',
                        active: false
                    }, {
                        id: 5,
                        name: 'Archive',
                        image: require('../assets/img/body5.jpg'),
                        link: '/archive',
                        active: false
                    }, {
                        id: 6,
                        name: 'Archive',
                        image: require('../assets/img/body6.jpg'),
                        link: '/archive',
                        active: false
                    }


                ],
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
    .src-components-slides {
        width: 20%;
        height: 100%;
        float: left;
        background-color: rgba(0, 0, 0, 0.3);
        box-shadow: 0 0 10px 0 black;
        overflow: auto;

        &::-webkit-scrollbar {
            width: 0;
            height: 0;
            display: none;
        }

        .ui.three.cards {
            margin: 0;

            .card {
                width: 100%;
                margin: 20px;

                .image {
                    border-radius: 4px 4px 0 0;
                }
            }
        }
    }
</style>
