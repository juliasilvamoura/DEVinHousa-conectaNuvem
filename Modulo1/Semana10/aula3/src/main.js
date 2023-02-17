import { createApp } from 'vue'
import App from './App.vue'

import { createStore } from 'vuex';

const display = {
    state(){
        return{
            text: 'Display'
        }
    },
    mutations:{
        updateDisplay(state, value){
            state.display = value.toUpperCase(); //toUpperCase deixa todas as letras maiusculas 
        },
    }
}

const cron = ({
    state(){
        return{
            seconds: 0,
            actived: false
        }
    },
    mutations:{
        parar(state){
            state.actived=false
        }

    },
    actions:{
        startCron(context){
            if(context.state.actived){
                setTimeout(() => {
                    context.state.seconds;
                    context.dispatch('startCron'); //dispatch chama action, passando uma função
                }, 1000)

            }
        }
    },
    gatters: {
        temp(state){ // metodo computada
           return `${state.seconds} segundos`
        }
    }
});

const store = createStore({
    modules:{
        cron: cron,
        display: display
        // actived

    }
});

// const store = createStore({
//     modules: {},
//     state(){
//         return{
//             display: 'Display',
//             seconds: 0,
//             actived: false
//         }
//     },
//     mutations:{
//         updateDisplay(state, value){
//             state.display = value.toUpperCase(); //toUpperCase deixa todas as letras maiusculas 
//         },
//         parar(state){
//             state.actived=false
//         }

//     }, 
//     actions:{
//         startCron(context){
//             if(context.state.actived){
//                 setTimeout(() => {
//                     context.state.seconds;
//                     context.dispatch('startCron'); //dispatch chama action, passando uma função
//                 }, 1000)

//             }
//         }

//     },
//     gatters: {
//         tempoFormatado(state){ // metodo computada
//            return `${state.seconds} segundos`
//         }
//     }
// });

const app = createApp(App);

app.use(store);

app.mount('#app');
