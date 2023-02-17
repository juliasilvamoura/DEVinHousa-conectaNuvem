import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// App.directive('zoom', {
//     beforeMount(el){
//         el.addEventListener('mouseover', ()=> {
//             el.style = "font-size: 20px";
//         })
//         el.addEventListener('mouseout', ()=> {
//             el.style = "font-size: 15px";
//         })
        
//     },
// })


app.mount('#app')
