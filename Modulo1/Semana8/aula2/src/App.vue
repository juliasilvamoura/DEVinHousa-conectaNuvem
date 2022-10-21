<template>
  <div class="app">
    <h1>Cadastro de curso</h1>
    <p>Entre com a quantidade de vagas</p>
    <input type="number" v-model="quantidade">
    <cadastroTurma :vagasTurma='quantidade'/>
  </div>
</template>

<script>
import cadastroTurma from './components/cadastroTurma.vue'

export default {
 data(){
   return{
     quantidade:0
   }
 },
  
      
    
  
  components: {
    cadastroTurma
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
