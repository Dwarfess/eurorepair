import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Home from '../components/Home.vue';

import Header from '../components/header.vue';
import ProjectPage from '../components/project/ProjectPage.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/project', name: 'ProjectPage', component: ProjectPage},
        {path: '*', component: Header},
    ],
    mode: 'history',
});

export default router;
