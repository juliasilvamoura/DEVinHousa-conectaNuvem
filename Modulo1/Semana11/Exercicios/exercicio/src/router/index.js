import {createRouter, createWebHashHistory} from 'vue-router';

import Home from '../views/home/Home.vue'
import Listagem from './../views/pessoas/listagem/Listagem.vue'
import Cadastro from './../views/pessoas/cadastro/Cadastro.vue'
import AuthView from '../views/auth/AuthView.vue'
import CadastroUser from '../views/user/cadastro/Cadastro.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/user/cadastro', component: CadastroUser,
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
    {path: '/pessoas/cadastro', component: Cadastro, beforeEnter: (to, from) => {
        const auth = localStorage.getItem('token');
        if(auth){
            return true
        }
        return to = '/auth'
    }},
    {path: '/pessoas/listagem', component: Listagem, beforeEnter: (to, from) => {
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