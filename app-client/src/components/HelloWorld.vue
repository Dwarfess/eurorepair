<template>
    <div class="container">
        <div class="content">
            <div class="logo"></div>

            <div class="content_text">
                <h2>your own electron</h2>
                <h1>project</h1>
                <p class="content_text_description">You have the opportunity to create your own renovation project.
                    The main idea is to fill the correct dimensions of your current work object
                    and get the exact amount of materials needed. And also calculate all your work automatically instead of you.
                    Just click the button below the text.
                </p>
            </div>

        </div>
        <Header msg="Ooops!!!"/>
    </div>
</template>

<script>
    import Header from './header.vue';

    export default {
        name: 'helloWorld',
        components: {
            Header
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .container {
        height: 100%;
        background: linear-gradient(rgba(0, 51, 126, 0.44), rgb(0, 51, 126));

        .content {
            float: left;
            color: white;
            margin-left: 40px;
            width: 29%;

            .logo {
                width: 200px;
                height: 200px;
                margin: 200px 0 60px;
                background: url("../assets/img/logo2.png") no-repeat top center;
                background-size: contain;

                &:hover {
                    background-image: url("../assets/img/logo_hover.png");
                    cursor: pointer;
                }
            }

            h1 {
                font-size: 70px;
                margin: 0;
                text-transform: uppercase;
                text-align: left;
            }

            h2 {
                font-size: 25px;
                word-spacing: 22px;
                font-weight: inherit;
                margin: 0;
                text-transform: uppercase;
                text-align: left;
            }

            .content_text_description {
                letter-spacing: 2px;
                text-align: left;
                line-height: 24px;
                color: lightsteelblue;
            }
        }
    }
</style>
