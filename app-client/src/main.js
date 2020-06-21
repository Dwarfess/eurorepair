import Vue from 'vue';
import SemanticUI from 'semantic-ui-vue';
import PortalVue from 'portal-vue';
import VueRouter from "vue-router";

import App from './App.vue';
import Home from './components/Home';

import 'semantic-ui-css/semantic.min.css';

import header from "./components/header";
import ProjectPage from "./components/project/ProjectPage";

Vue.config.productionTip = false;
Vue.use(PortalVue);
Vue.use(SemanticUI);
Vue.use(VueRouter);

const router = new VueRouter({
	routes: [
		{ path: '/', component: Home },
		{ path: '/project', component: ProjectPage },
		{ path: '*', component: header }
	],
	mode: 'history'
});

new Vue({
	router,
	render: h => h(App),
}).$mount('#app');


