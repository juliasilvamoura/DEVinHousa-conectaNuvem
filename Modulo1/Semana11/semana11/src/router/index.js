import {createRouter, createWebHashHistory} from 'vue-router';

import Home from './../components/HomeView.vue'
import Login from './../components/LoginView.vue'
import Register from './../components/RegisterView.vue'
import Buscar from './../components/Buscar.vue'
import Cadastro from './../components/Cadastro.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/user', component: Register,
    beforeEnter: (to) =>{
        const auth = localStorage.getItem('token');
        if(auth){
            return true
        }
        return to = '/auth'
    }},
    {path: '/auth', component: Login, beforeEnter: (to, from) => {
        const auth = localStorage.getItem('token');
        if(auth){
            return to = '/'
        }
        return true;
    }},
    {path: '/cadastro', component: Cadastro, beforeEnter: (to, from) => {
        const auth = localStorage.getItem('token');
        if(auth){
            return true
        }
        return to = '/auth'
    }},

    {path: '/buscar', component: Buscar, beforeEnter: (to, from) => {
        const auth = localStorage.getItem('token');
        if(auth){
            return true
        }
        return to = '/auth'
    }},

]

const router = createRouter ({
    routes,
    history: createWebHashHistory()
});

export default router;