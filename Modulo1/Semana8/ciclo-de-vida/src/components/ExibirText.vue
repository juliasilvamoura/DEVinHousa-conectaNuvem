<template>
  <div class="exibir-text">
      <h2>Receptor</h2>
      <p>Meu nome é {{ nome }}</p>
  </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    data(){
        return{
            nome: null
        }
    },
    created(){
        barramento.$on('textoEmitido', texto => {
            this.nome = texto
        }) // evento que quero escutar
    }
}
</script>

<style>

</style>