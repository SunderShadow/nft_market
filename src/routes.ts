import HomeView from "@/views/HomeView.vue"
import type {RouteRecordRaw} from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    }
]

export default routes