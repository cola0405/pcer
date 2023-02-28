import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import routers from './routers'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: routers
})

Vue.config.productionTip = false
new Vue({
  el:'#app',
  render: h => h(App),
  router,
  data: {
    message: 'hello vue.js'
  }
}).$mount('#app')