import Vue from 'vue'
import homePage from './homePage.vue'
import contact from '../src/pages/contact'

Vue.config.productionTip = false


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