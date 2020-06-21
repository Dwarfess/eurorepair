import Vue from 'vue';
import SemanticUI from 'semantic-ui-vue';
import '../node_modules/semantic-ui-css/semantic.min.css';
import PortalVue from 'portal-vue';

import App from './App.vue';
import router from './router';
import store from './store';
import jquery from 'vue-jquery';

Vue.config.productionTip = false;

Vue.use(PortalVue);
Vue.use(SemanticUI);
Vue.use(jquery);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
