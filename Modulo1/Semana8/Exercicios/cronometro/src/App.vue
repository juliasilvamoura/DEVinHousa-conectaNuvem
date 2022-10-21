<template>
  <div class="app">
    <button type="button" @click="iniciar">Iniciar</button>
    <button type="button" @click="parar">Parar</button>
    <button type="button" @click="zerar">Zerar</button>

    <div class="cronometro">
       <h1>{{ this.horas }}:{{ this.minutos }}:{{ this.segundos }}</h1>
  </div>
  <button class="voltar" type="button" @click="voltar">Voltar</button>
    
  </div>
  
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      horas: 0,
      minutos: 0,
      segundos: 0,
      contador: 0
    }
  },
  methods:{
    zerar(){
      this.horas = 0
      this.minutos = 0
      this.segundos = 0
    },
    iniciar(){
      this.contador = setInterval(() => {  
          
        if((this.segundos ++) >= 60){
          this.segundos = 0
          this.minutos++
        }
        
        if(this.minutos == 60){
          this.horas++
          this.minutos = 0
        }
        if(this.horas == 60){
          this.minutos = 0
          this.horas = 0
          this.segundos = 0
        } 
      }, 1000)

    },
    parar(){
      clearInterval(this.contador)
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
