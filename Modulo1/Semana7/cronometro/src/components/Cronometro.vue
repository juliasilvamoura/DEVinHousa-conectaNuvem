<template>
  <div class="cronometro">
      
  </div>
  <button class="voltar" type="button" @click="voltar">Voltar</button>
</template>

<script>
export default {
    name:'cronometro',
    props:{
        cronometro:{

        }
    },
    methods:{
        voltar(){
            this.$emit('voltar')
        }
    }
}
</script>

<style>

</style>