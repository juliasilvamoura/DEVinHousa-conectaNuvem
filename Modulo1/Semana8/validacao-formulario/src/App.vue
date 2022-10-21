<template>
  <div class="validacao-formulario">
  <formularioCadastroProduto />
  </div>
</template>

<script>
import formularioCadastroProduto from './components/FormularioCadastroProduto.vue'

export default {
  name: 'App',
  components: {
    formularioCadastroProduto
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
