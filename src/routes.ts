import type {RouteRecordRaw} from "vue-router";

import HomeView from "@/views/HomeView.vue"
import BidView from "./views/BidView.vue";
import ProfileView from "@/views/ProfileView.vue";
import SavedView from "@/views/SavedView.vue";
import SettingsView from "@/views/SettingsView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/bid',
        name: 'bid',
        component: BidView
    },
    {
        path: '/saved',
        name: 'saved',
        component: SavedView
    },
    {
        path: '/profile',
        name: 'profile',
        component: ProfileView
    },
    {
        path: '/settings',
        name: 'settings',
        component: SettingsView
    }
]

export default routes