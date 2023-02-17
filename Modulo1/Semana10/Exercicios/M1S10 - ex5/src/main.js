import { createApp } from 'vue'
import App from './App.vue'

import Home from './views/home/Home.vue'
import Cadastro from './views/pessoas/cadastro/Cadastro.vue'
// import Usuario from './views/pessoas/cadastro/Usuario.vue'
import Listagem from './views/pessoas/listagem/Listagem.vue'

import { createRouter, createWebHashHistory } from 'vue-router';

const store = createStore ({
    state() {
        return {
            pessoas: []
        }
    },
    mutations: {
        insert(state, pessoa) {
            state.pessoas.push(pessoa);
        }
    }
})

const routes = [

    {path: "/", component: Home, alias: ["/home"]},
    {path: "/pessoas/cadastro", component: Cadastro},
    {path: "/pessoas/listagem", component: Listagem}
]

// const routes = [
//     // { path:'/', redirect: '/cadastro/usuario'}, // ele direciona corretamente assim
//     // alias quer dizer que se colocar só / ou /home ele vai pra pagina home
// 	{ path:'/', component: Home, alias:["/home"], beforeEnter: (to, from) => { // beforeEnter para ajudar a proteger a rota
//         if(from.pullPath === "/cadastro/usuario"){
//            return to.fullPath = "/cadastro";
//             // to.path="/cadastro"
//             // return true
//         }
//         return true;
//     }}, //caminho path

//     { path:'/pessoas/cadastro', component: Cadastro, children:[
//         {path: 'usuario', component: Usuario} // para editar usar o path param path: '/usuario:id'
//         ]
//     }, 

//     {path: '/pessoas/listagem', component: Listagem}
    
// ];

 const router = createRouter({
    routes,
    history: createWebHashHistory()
})

// // Para monitoramento
// router.beforeEach((to, from) =>{
//     if(to.fullPath = "/" && from.pullPath === "/cadastro"){
//         return from.pullPath = "/cadastro/usuario"
//     }
//     // console.log("To" + to.fullPath)
//     // console.log("From" + from.fullPath) // retorna de onte está vindo
//     // return true
// })

const app = createApp(App)

app.use(router);
app.use(store);

app.mount('#app')


// createApp(App).mount('#app')
