import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import Code from './components/Code.vue';
import Grid from './components/Grid.vue';
import LinkText from './components/LinkText.vue';
import Mixins from './mixins/mixin.js';
import './assets/css/reset.css';

Vue.config.productionTip = false;
Vue.component('Code', Code);
Vue.component('Grid', Grid);
Vue.component('LinkText', LinkText);
Vue.mixin(Mixins);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
