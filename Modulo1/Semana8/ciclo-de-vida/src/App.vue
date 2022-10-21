<template>
  <!-- <div id="app">
    <button @click="exibir=!exibir">Clique Aqui</button>
    <div v-show="exibir">
      <CicloVida />
    </div>
  </div> -->
  <div id="app">
    <EmitirTexto/>
    <ExibirText />
  </div>
</template>

<script>
// import CicloVida from './components/CicloVida.vue'
import EmitirTexto from './components/EmitirTexto.vue'
import ExibirText from '@/components/ExibirText.vue'

export default {
  name: 'App',
  components: {
    // CicloVida
    EmitirTexto,
    ExibirText
  },
  data(){
    return{
      exibiri: true
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
