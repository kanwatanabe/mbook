import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import HomeShops from '../components/HomeShops.vue'
import ParamsShop from '../components/ParamsShop.vue'
import ShopForm from '../components/ShopForm.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/homeshops',
            name: 'HomeShops',
            component: HomeShops
        },
        {
            path: '/paramsshop/:id',
            name: 'ParamsShop',
            component: ParamsShop,
            props: true
        },
        {
            path: '/shopform',
            name: 'ShopForm',
            component: ShopForm,
        }
    ]
});