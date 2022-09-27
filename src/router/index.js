import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import PredictionPage from "../views/PredictionPage.vue";
import Search from "../views/Search.vue";
import Setting from "../views/Setting.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            title: "Home",
            auth: false,
        },
    },
    {
        path: "/prediction_page",
        name: "PredictionPage",
        component: PredictionPage,
        meta: {
            title: "PredictionPage",
            auth: false,
        },
    },
    {
        path: "/search",
        name: "Search",
        component: Search,
        meta: {
            title: "Search",
            auth: false,
        },
    },
    {
        path: "/setting",
        name: "Setting",
        component: Setting,
        meta: {
            title: "Setting",
            auth: false,
        },
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;