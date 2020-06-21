import Vue from 'vue';
import SemanticUI from 'semantic-ui-vue';
import PortalVue from 'portal-vue';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;


Vue.use(PortalVue);
Vue.use(SemanticUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
