import Vue from 'vue';
import App from './App.vue';

import SemanticUI from 'semantic-ui-vue';
import PortalVue from 'portal-vue';

import 'semantic-ui-css/semantic.min.css';

Vue.config.productionTip = false;
Vue.use(PortalVue);
Vue.use(SemanticUI);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
