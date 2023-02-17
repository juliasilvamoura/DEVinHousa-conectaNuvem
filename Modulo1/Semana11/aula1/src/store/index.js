import { createStore } from 'vuex';
import axios from 'axios'

const userModule = {
    namespaced: true,
    state() {
        return {
            user: {}
        }
    },
    actions: {
        newUser(context, user) {
            const token = localStorage.getItem('token')
            // axios.get('/', {
            //     params: {
            //     },
            //     headers: {
            //         authorization: 'dsadsad'
            //     }
            // })
            // axios.post('/', user, {
            //     authorization: 'dsadsad'
            // })
            axios.post('https://devinhouse-auth.herokuapp.com/api/v1/user', user, {
                headers: {
                    authorization: token
                }

            })
                .then((result) => {

                })
                .catch((err) => {
                    // if(err.response.status === 401){

                    // }

                })

        },
        getUser(context) {
            const id = localStorage.getItem('id');
            const token = localStorage.getItem('token')
            axios.get(`https://devinhouse-auth.herokuapp.com/api/v1/user/${id}`, {
                authorization: token
            }).then((response) => {
                context.state.user = response.data
            }).catch((err) => {
                console.log(err)
            })
        }
    }
}

const autenticacaoModule = {
    namespaced: true,
    state() {
        return {
            autenticado: false
        }
    },
    mutations: {
        // autenticar(state, login){
        //     if(login.email === 'teste@teste.com' && login.senha === "123"){
        //         localStorage.setItem('autenticado', true);
        //         state.autenticado = true;
        //     }
        // },
        logout(state) {
            //localStorage.removeItem('autenticado')
            localStorage.removeItem('token');
            state.autenticado = false
        },
        isAutenticado(state) { // inicia o metodo com is quando retornar uma booleana
            state.autenticado = localStorage.getItem('token') ? true : false;
        }
    },
    actions: {
        autenticar(context, login) {
            return new Promise((resolve, reject) => {
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
    state() {
        return {
            cadastros: []
        }
    },
    actions: {
        async salvar(context, cadastro) {
            await axios.post('https://627bb940b54fe6ee008db865.mockapi.io/pessoas/pessoa', cadastro)

        },
        load(constext){
            axios.get(`https://627bb940b54fe6ee008db865.mockapi.io/pessoas/pessoa`)
            .then((response) => {
                constext.state.cadastros = (response.data)

            })

        },
        excluir(context, id){
            axios.delete(`https://627bb940b54fe6ee008db865.mockapi.io/pessoas/pessoa/${id}`)

        },
        buscaPessoa(context,id){
            axios.get(`https://627bb940b54fe6ee008db865.mockapi.io/pessoas/pessoa/${id}`)
        }
    }
}

const store = createStore({
    modules: {
        autenticacaoModule,
        userModule,
        cadastroModule,
     
    }
});

export default store;