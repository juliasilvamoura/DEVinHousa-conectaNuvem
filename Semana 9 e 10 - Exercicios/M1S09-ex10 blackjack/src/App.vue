<template>
 <div class="container mt-5">
   <h1>Blackjack</h1>
   <hr><div class="col-12">
     <button :disabled="estado" class="btn btn-primary" @click="novoJogo">Novo Jogo</button>
   </div>
   <hr>
   <div class="col-12" v-show="estadoPartida.length > 0">
     <button class="badge bg-success" v-show="estadoPartida === 'ganhou'">Você Ganhou</button>
     <button class="badge bg-danger" v-show="estadoPartida === 'perdeu'">Você Perdeu</button>
   </div>
   <hr v-show="estadoPartida.length > 0">
   <div>
     <div class="col-12">
       <label>Quantidade de jogadas: {{quantidadeJogadas}}</label>
     </div>
     <div class="col-12">
       <label>Pontuação Adversário: 17</label>
     </div>
     <div class="col-12">
       <label>Pontuação Atual: {{pontuacaoAtual}}</label>
     </div>
     <hr>
     <div class="col-12">
       <label>Carta: {{ carta }} </label>
     </div>
     <hr>
     <div class="col-12">
       <button class="btn btn-success" :disabled="!estado" @click="novaCarta">Nova Carta</button>
     </div>
   </div>
 </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      estado: false,
      quantidadeJogadas: 5,
      pontuacao: 0,
      carta: 0,
      estadoPartida: ''
    }
  },
  methods:{
    novoJogo(){
      this.estado = true;
      this.quantidadeJogadas = 5;
      this.pontuacao = 0;
      this.carta = 0;
      this.estadoPartida = ''
    },
    novaCarta(){
      this.carta = Math.round(Math.random()* (11 *1)+1)
      this.pontuacaoAtual = this.carta;
    }

  },
  computed:{
    pontuacaoAtual: {
      get(){
        return this.pontuacao;
      },
      set(value){
        this.pontuacao = this.pontuacao + value;
        this.quantidadeJogadas -= 1;
        if((this.pontuacao > 21) || (this.quantidadeJogadas === 0 && this.pontuacao <17)){
          this.estadoPartida = 'perdeu'
        } else if(this.pontuacao > 17){
          this.estadoPartida = 'ganhou'
        }
        if(this.quantidadeJogadas === 0 || this.estadoPartida.length > 0){
          this.estado = false;
        }
      }
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
