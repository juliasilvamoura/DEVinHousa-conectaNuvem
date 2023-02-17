import Vue from 'vue'
import App from './App.vue'
import {createApp} from 'vue'


let app = createApp(App);

//v-demo
app.directive('demo',{

  beforeMount(el, binding){
    console.log(el)
    console.log(binding)
  }
})

app.mout('#app')