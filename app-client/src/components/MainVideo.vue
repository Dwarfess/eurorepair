<template lang="html">

    <section class="src-components-main-video">
        <div class="description">
            <h2>Guide</h2>
            <p>Short video showing how to use this application</p>
        </div>

        <div class="video">
            <sui-embed
                    id="O6Xo21L0ybE"
                    :placeholder="image"
                    source="youtube"
            />
        </div>
    </section>

</template>

<script lang="js">

    export default {
        name: 'src-components-main-video',
        props: [],
        mounted() {

        },
        data() {
            return {
                image: require('../assets/img/main-video.jpg')
            }
        },
        methods: {},
        computed: {}
    }

</script>

<style scoped lang="scss">
    $firstColor: #ffe21f;

    .src-components-main-video {
        width: 35%;
        margin-top: 550px;
        padding-left: 4%;
        float: left;

        h2 {
            font-size: 50px;
            font-weight: inherit;
            margin: 0;
            text-transform: uppercase;
            text-align: left;
            color: $firstColor;
        }

        .description {
            margin-bottom: 20px;
            p {
                letter-spacing: 2px;
                text-align: left;
                line-height: 24px;
                color: $firstColor;
            }
        }

        .video {
            border: 2px solid $firstColor;
            border-radius: 5px;

            .embed {
                border-radius: 3px;
            }
        }
    }
</style>
