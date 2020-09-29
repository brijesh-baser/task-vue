import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import TodayTask from "../views/TodayTask.vue";
import PendingTask from "../views/PendingTask.vue";
import CompletedTask from "../views/CompletedTask.vue";
import AllTask from "../views/AllTask.vue";
import TaskToBeStart from "../views/TaskToBeStart.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/today-task",
    name: "TodayTask",
    component: TodayTask
  },
  {
    path: "/pending-task",
    name: "PendingTask",
    component: PendingTask
  },
  {
    path: "/completed-task",
    name: "CompletedTask",
    component: CompletedTask
  },
  {
    path: "/all-task",
    name: "AllTask",
    component: AllTask
  },
  {
    path: "/task-to-be-start",
    name: "TaskToBeStart",
    component: TaskToBeStart
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/task/new",
    name: "AddTask",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AddTask.vue")
  },
  {
    path: "/task/:id",
    name: "EditTask",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/EditTask.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
