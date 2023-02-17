<template>
  <div id="app">
    <h1 v-text="msg"></h1> <!-- a diretiva v-text faz uma renderização melhor que {{ msg }} se tiver algo escrito dentro do h1 ele ignora o v-text é prioridade-->
   <input type="text" :value="msg">  <!-- v-bind ou : é um valor do código rinderizado na tela-->
   <!-- <button v-on:click="msg = 'Nova mensagem'">Troca mensagem</button> v-on ou @ -->
   <button @click="trocaMensagem">Troca mensagem</button>
   <!-- @keydown.enter="trocarMensagem" -->
   <p v-text="html"></p>
   <input type="text" v-model="msg">
  </div>
</template>

<script>


export default {
  name: 'App',
 data(){
   return{
     msg: 'Welcome to You Vue.JS App',
     html: "<p cladd='colorRed'></p>"
   }
 },
 methods:{
   trocaMensagem(){
     this.msg = 'Nova mensagem'
   }
 }
}
</script>

<style>
 .colorRed{
   color: red;
 }
</style>
