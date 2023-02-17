<template>
<div class="app">
  <div v-show="titulo">
    <h3>{{ titulo }}</h3>
    <header :titulo="titulo"/>
  </div>

  <input type="text" v-model="titulo">
</div>
  
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  },
  data(){
    return{
      titulo: ''
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
