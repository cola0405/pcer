import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import routers from './routers'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(mavonEditor);

const router = new VueRouter({
  mode: 'history',
  routes: routers
})

new Vue({
  el:'#app',
  render: h => h(App),
  router,
  data: {
    message: 'hello vue.js'
  }
}).$mount('#app')