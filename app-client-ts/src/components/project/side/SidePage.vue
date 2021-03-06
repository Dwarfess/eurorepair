<template lang="html">

  <section class="project">
    <span v-if="sideParams.name">
      <div class="project_article">
        <div class="project_article_name">
          <div class="ui mini steps">
            <div class="step">
              <i class="truck icon"></i>
              <div class="content">
                <div class="title">Shipping</div>
                <div class="description">Choose your shipping options</div>
              </div>
            </div>
            <div class="active step">
              <i class="payment icon"></i>
              <div class="content">
                <div class="title">Billing</div>
                <div class="description">Enter billing information</div>
              </div>
            </div>
            <div class="disabled step">
              <i class="info icon"></i>
              <div class="content">
                <div class="title">Confirm Order</div>
                <div class="description">Verify order details</div>
              </div>
            </div>
          </div>
        </div>
        <div class="project_article_canvas">
          <SideLayout :sideParams="sideParams"></SideLayout>
        </div>
<!--        <ProjectEditor :project-params="projectParams"></ProjectEditor>-->
      </div>

      <div class="project_footer" v-if="roomParams.id">
        <div is="sui-button-group">
          <sui-button size="large" color="teal" @click.native="saveProject">Save</sui-button>
          <sui-button-or size="large"/>
          <sui-button size="large" color="yellow" @click.native="resetProject" :disabled="!!projectParams._tempId">Reset</sui-button>
          <sui-button-or size="large"/>
          <sui-button size="large" @click.native="toggleDeletionConfirmationDialog" :disabled="!!projectParams._tempId">Delete</sui-button>
        </div>
      </div>

<!--      <sui-modal v-model="showDeletionConfirmationDialog">-->
<!--        <sui-modal-content>-->
<!--          <p>Are you sure you want to delete <b>{{projectParams.mainParams[0].name}}</b> project?</p>-->
<!--        </sui-modal-content>-->
<!--        <div is="sui-button-group">-->
<!--          <sui-button color="teal" @click.native="deleteProject">Confirm</sui-button>-->
<!--          <sui-button-or/>-->
<!--          <sui-button color="yellow" @click.native="cancelToDeleteProject">Cancel</sui-button>-->
<!--        </div>-->
<!--      </sui-modal>-->
    </span>
  </section>

</template>

<script lang="ts">
    import {Vue, Component, Watch, Model} from 'vue-property-decorator';

    import {Project, Room, Side} from '@/components/Types';
    import SideLayout from "@/components/project/side/SideLayout.vue";

    @Component({
        components: {
            SideLayout
        },
        directives: {}
    })
    export default class SidePage extends Vue {
        // private showDeletionConfirmationDialog: boolean = false;
        private projectParams: Project = {};
        private roomParams: Room = {};
        private sidesParams: Side[] = [];
        private sideParams: Side = {};

        @Watch('$store.state.projects')
        private watchProjectParams() {
            if (this.$store.state.projects[0] && Object.keys(this.projectParams).length === 0) {
                this.projectParams = this.$store.state.projects[0];
                this.getRoomParams();
                this.fillSidesParams();
                this.getSideParams();
            }
        }
        //
        // @Watch('$route.params.id')
        // private watchRouteParams() {
        //     this.resetProject();
        // }
        //
        created(): void {
            this.renderPage();
        }

        private fillSidesParams() {
            const width = Number(this.roomParams.width);
            const length = Number(this.roomParams.length);
            const height = Number(this.roomParams.height);

            this.sidesParams  = [
                {
                    name: 'left_front_side',
                    width: height,
                    height: height
                }, {
                    name: 'front_side',
                    width: width,
                    height: height
                }, {
                    name: 'right_front_side',
                    width: height,
                    height: height
                }, {
                    name: 'top_front_side',
                    width: width,
                    height: height
                }, {
                    name: 'left_side',
                    width: length,
                    height: height
                }, {
                    name: 'bottom_side',
                    width: width,
                    height: length
                }, {
                    name: 'right_side',
                    width: length,
                    height: height
                }, {
                    name: 'top_side',
                    width: width,
                    height: length
                }, {
                    name: 'left_back_side',
                    width: height,
                    height: height
                }, {
                    name: 'back_side',
                    width: width,
                    height: height
                }, {
                    name: 'right_back_side',
                    width: height,
                    height: height
                }, {
                    name: 'top_back_side',
                    width: width,
                    height: height
                }
            ]
        }

        private renderPage() {
            const projectId = this.$route.params.id;
            const currentProject = this.$store.state.projects.find((project) => project._id === projectId);

            if (currentProject) {
                this.projectParams = currentProject;
                this.getRoomParams();
                this.fillSidesParams();
                this.getSideParams();
            } else {
                this.$store.dispatch('GET_PROJECT', this.$route.params.id);
            }
        }

        private getRoomParams() {
            const roomId = this.$route.params.roomId;

            for (let category of Object.values(this.projectParams)) {
                if (Array.isArray(category)) {
                    this.roomParams = category.find((room) => room.id === Number(roomId));
                    if (this.roomParams?.id) return;
                }
            }
        }

        private getSideParams() {
            const sideName = this.$route.params.sideName;

            this.sideParams = this.sidesParams.find((side: Side) => side.name === sideName);
            console.log(this.sideParams);
        }
        //
        // private saveProject() {
        //     if (this.projectParams._id) {
        //         this.$store.dispatch('SAVE_PROJECT', this.projectParams);
        //     } else {
        //         this.$store.dispatch('CREATE_PROJECT', this.projectParams);
        //     }
        // }
        //
        // private resetProject() {
        //     this.$store.state.projects = [];
        //     this.projectParams = {};
        //
        //     this.renderPage();
        // }
        //
        // toggleDeletionConfirmationDialog() {
        //     this.showDeletionConfirmationDialog = !this.showDeletionConfirmationDialog;
        // }
        //
        // private deleteProject() {
        //     this.$store.dispatch('DELETE_PROJECT', this.projectParams._id);
        // }
        //
        // private cancelToDeleteProject() {
        //     this.toggleDeletionConfirmationDialog();
        // }


    }
</script>

<style scoped lang="scss">
  @import '../../../variables';

  .project {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 10px;

    &_article {
      height: calc(100% - 82px);

      &_name {
        color: $mainColor;
        height: 10%;
        margin: 0;
        text-transform: uppercase;
      }

      &_canvas {
        width: 70%;
        height: 90%;
        border: 2px solid $mainColor;
        border-radius: 5px;
        padding: 5px;
        float: left;
        background: linear-gradient(45deg, rgba(0, 0, 0, 0) 50%, $defaultColor 55%, rgba(0, 0, 0, 0) 60% );
        background-size: 0.5em 0.5em;
      }
    }

    &_footer {
      height: 52px;
      padding-top: 10px;
      text-align: left;
    }

    /deep/ .ui.standard.modal {
      width: 202px;

      .content, .buttons {
        padding: 10px;

        p {
          font-size: initial;
          text-align: center;
        }
      }
    }
  }
</style>
