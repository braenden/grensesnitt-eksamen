import Vue from "vue";
import VueRouter from "vue-router";
import App from "./app.vue";
import Contact from "./pages/contact";
import HomePage from "./pages/homePage";
import Booking from "./pages/booking";
import Cancellation from "./pages/cancellation";
import AboutUs from "./pages/aboutUs";
import YourReservations from "./pages/yourReservations";
import Login from "./pages/login";
import Staff from "./pages/staff";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: "/", component: HomePage },
    { path: "/contact", component: Contact },
    { path: "/booking", component: Booking },
    { path: "/cancellation", component: Cancellation },
    { path: "/aboutUs", component: AboutUs },
    { path: "/yourReservations", component: YourReservations },
    { path: "/login", component: Login },
    { path: "/staff", component: Staff, name: "staff" }
  ],
  mode: "history"
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

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
