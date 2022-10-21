<template>
  <div class="cronometro">
       <h1 @dblclick="$emit('parar')">{{ hora }}:{{ minuto }}:{{ segundos }}:{{ milisegundos }}</h1>
  </div>
  <button class="voltar" type="button" @click="voltar">Voltar</button>
</template>

<script>
export default {
   name: "Cronometro",
    props:{
        horas: String,
        minutos: String,
        segundos: String
    },
    methods:{
        voltar(){
            this.$emit('voltar', this.cronomet)
        },
        
    }
}
</script>

<style>

</style>