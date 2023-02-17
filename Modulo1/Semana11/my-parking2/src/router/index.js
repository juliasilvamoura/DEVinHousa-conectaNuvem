import {createRouter, createWebHashHistory} from 'vue-router';

import Home from '../views/Home.vue'
import Template from './../views/dashboard/Template.vue'
import ListarReserva from './../views/dashboard/ListarReserva.vue'
import NovaReserva from './../views/dashboard/NovaReserva.vue'
import AuthView from './../views/dashboard/AuthView.vue'
import UserView from './../views/dashboard/UserView.vue'

const reserva = [
    {path: 'nova', component: NovaReserva},
    {path: 'lista', component: ListarReserva}

]

const routes = [
    {path: '/', component: Home},
    {path: '/user', component: UserView,
    beforeEnter: (to) =>{
        const auth = localStorage.getItem('token');
        if(auth){
            return true
        }
        return to = '/auth'
    }},
    {path: '/auth', component: AuthView, beforeEnter: (to, from) => {
        const auth = localStorage.getItem('token');
        if(auth){
            return to = '/'
        }
        return true;
    }},
    {path: '/reserva', component: Template, children: reserva, redirect: '/reserva/lista', beforeEnter: (to, from) => {
        const auth = localStorage.getItem('token');
        if(auth){
            return true
        }
        return to = '/auth'
    }},
]

//redirect  template sempre renderiza para lista

const router = createRouter ({
    routes,
    history: createWebHashHistory()
});

export default router;