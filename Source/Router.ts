import VueRouter from "vue-router";
import { Routes } from "./Routes";

const Router = new VueRouter({ mode: "history", routes: Routes });

export { Router };
