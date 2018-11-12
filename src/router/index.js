import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/pages/Home";
import ContactScreen from "@/components/pages/Demo";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/contact",
      name: "Contact",
      component: ContactScreen
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    console.log({ to, from });
    if (from.path == "/") {
      document.getElementById("Home").className = "--showbackdrop";
    }
    if (to.path == "/") {
      document.getElementById("Home").className = "";
    }
    if (to.name == "Home" && from.name == "Contact") {
      window.location.href += "#Contact";
    }
  },
  mode: "history"
});
