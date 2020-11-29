import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Home from '../components/Home.vue';

import Header from '../components/header.vue';
import ProjectPage from '../components/project/ProjectPage.vue';
import RoomPage from "@/components/project/room/RoomPage.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/project/:id', name: 'projectPage', component: ProjectPage},
        {path: '/project/:id/room/:roomId', name: 'roomPage', component: RoomPage},
        {path: '*', component: Header},
    ],
    mode: 'history',
});

export default router;
