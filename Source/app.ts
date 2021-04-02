import Vue from "vue";
import VueRouter from "vue-router";
import { Router } from "./Router";
import Shell from "./Shell.vue";
import "./_Resources/Styles/main.scss";

Vue.use(VueRouter);

const app = new Vue(
{
    el: "#root",
    router: Router,
    render: show => show(Shell)
});
