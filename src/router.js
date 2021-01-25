import Vue from "vue";
import VueRouter from "vue-router";
import Calendar from './components/calendar/src/App.vue'

Vue.use(VueRouter);

const routes = [{ path: "/Calendar", component: Calendar }];

export default new VueRouter({
  routes,
});
