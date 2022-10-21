<template>
  <!-- <ListaCompras/> -->
  <input type="text" v-model="nomeA">
    <Aluno v-bind:nomeAluno="nomeA"/> <!-- chama para mandar o valor para outro componente -->
  
</template>

<script>
// import ListaCompras from './components/ListaCompras.vue'
import Aluno from './components/Aluno.vue'

export default {
  name: 'App',
  data(){
    return {
      nomeA: null
    }

  },
  components: {
    // ListaCompras,
    Aluno
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
