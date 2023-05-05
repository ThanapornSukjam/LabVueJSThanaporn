import Vue from "vue";
import Router from "vue-router";

import home from "../components/HelloWorld.vue";
import Profile from "../components/Profile.vue";
import Project from "../components/Project.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: home
    },
    {
      path: "/Profile",
      component: Profile
    },
    {
      path: "/Project",
      component: Project
    }
  ]
});
