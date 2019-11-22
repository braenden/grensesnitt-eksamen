import Vue from 'vue';
import VueRouter from 'vue-router';
import homePage from './homePage.vue';
import HelloWorld from './components/HelloWorld';
import Contact from './components/contact'
import User from './components/user'

Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
routes: [
  { path: "/", component: HelloWorld },
  { path: "/contact", component: Contact },
  { path: "/user/:id", component: User },
],
mode: "history"
});

new Vue({
  router, 
  render: h => h(homePage),
}).$mount('#app')

















































































/*
const routes = {
  "/": homePage,
  "/contact": contact
}

new Vue({

  data: {
    currentRoute: window.location.pathname,
  },

  computed: {
    currentComponent(){
 return routes[this.currentRoute];
    }
  },
  render: function (h) {
    return h(this.currentComponent);
  }
}).$mount('#app')

*/