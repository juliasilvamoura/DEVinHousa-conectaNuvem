import { createStore } from 'vuex';
import axios from 'axios'

function geraId() {
    var stringAleatoria = '';
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 24; i++) {
        stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return stringAleatoria;
}


const userModule = {
    namespaced: true,
    state(){
        return{
            user: {}
        }
    },
    actions: {
        newUser(context, user){
            const token = localStorage.getItem('token')
            axios.post('https://devinhouse-auth.herokuapp.com/api/v1/user', user, {
                headers: {
                    authorization: token
                }
                
            })
            .then((result) =>{

            })
            .catch((err) => {
            })

        },
        getUser(context){
            const id = localStorage.getItem('id');
            const token = localStorage.getItem('token')
            axios.get(`https://devinhouse-auth.herokuapp.com/api/v1/user/${id}`, {
                authorization : token
            }).then((response) =>{
                context.state.user = response.data
            }).catch((err) => {
                console.log(err)
            })
        }
    }
}

const autenticacaoModule = {
    namespaced: true,
    state(){
        return{
            autenticado: false
        }
    },
    mutations: {

        logout(state){
            localStorage.removeItem('token');
            state.autenticado = false
          },
          isAutenticado(state){ // inicia o metodo com is quando retornar uma booleana
            state.autenticado = localStorage.getItem('token') ? true : false;
          }
    },
    actions: {
        autenticar(context, login){
            return new Promise((resolve, reject) =>{
            axios.post('https://devinhouse-auth.herokuapp.com/api/v1/login', login)
                .then((response) => {
                    const token = response.data.token;
                    const id = response.data.details.id;
                    localStorage.setItem('token', token);
                    localStorage.setItem('id', id);
                    context.state.autenticado = true;
                    resolve();
                })
                .catch((err) => {
                    console.log(err)
                    reject();
                })

            })    

        }
    }
}

const cadastroModule = {
    namespaced: true,
    state(){
        return{
            cadastros: []
        }
    },
    mutations: {
        save(state, cadastro){
            cadastro.id = geraId(); // adicionar essa function
            state.cadastros.push(cadastro);
            console.log(this.cadastros)

        },
        excluir(state, id){
            const index = state.cadastros.findIndex(r => r.id === id);
            state.cadastros.splice(index, 1);
        }
    }

}

const store = createStore({
    modules:{
        autenticacaoModule,
        userModule,
        cadastroModule
    }
});

export default store;