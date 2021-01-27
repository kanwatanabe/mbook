import Vue from 'vue'
import Router from 'vue-router'
import NotLoginHome from '../components/Home/NotLogin/NotLoginHome.vue'
import LoginHome from '../components/Home/Login/LoginHome.vue'
import HomeShops from '../components/Facility/HomeShops.vue'
import ParamsShop from '../components/Facility/ParamsShop.vue'
import ShopForm from '../components/Facility/ShopForm.vue'
import Users from '../components/User/Users.vue'
import UserForm from '../components/User/UserForm.vue'
import UserLogin from '../components/User/UserLogin.vue'

import store from '../store/store.js'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: NotLoginHome,
        },
        {

            path: '/loginhome',
            name: 'LoginHome',
            component: LoginHome,
            props: true,
            meta: {
                requiresAuth: true
            }
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
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/users',
            name: 'Users',
            component: Users,
        },
        {
            path: '/userform',
            name: 'UserForm',
            component: UserForm,
        },
        {
            path: '/userlogin',
            name: 'UserLogin',
            component: UserLogin,
        }
    ],
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth) && !store.state.headers) {
        next({
            path: '/',
            query: {
                redirect: to.fullPath
            }
        });
    } else {
        next();
    }
});

export default router