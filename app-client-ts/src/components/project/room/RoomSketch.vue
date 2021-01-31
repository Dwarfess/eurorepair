<template lang="html">

  <section class="room_sketch">

  </section>

</template>

<script lang="ts">
    import {Vue, Component, Prop, Watch, Model} from 'vue-property-decorator';
    import $ from 'jquery';

    import {Project, Room} from '@/components/Types';

    @Component({
        components: {},
        directives: {}
    })
    export default class RoomSketch extends Vue {
        @Prop() private roomParams: Room;

        mounted() {
            console.log(this.roomParams)
        }

    }
</script>

<style scoped lang="scss">
  @import '../../../variables';

  .room_sketch {

  }
</style>
