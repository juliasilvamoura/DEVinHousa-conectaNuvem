<template>
  <div class="app">
    <h2>{{ verificarMaiorIdade }}</h2>
    <p v-if="verificaMaiorIdade">É maior de idade</p>
    <p v-else>É menor de idade</p>
    <h2 v-show="verificaMaiorIdade">É maior</h2> <!-- Se for falso ele não aparece-->
    <h1>A cor é {{ cor }}</h1>
    <corAzul @corSelecionada="azul"/>
    <corVermelha @corSelecionada="vermelha"/>
  </div>
  <!-- <Cronometro @voltar='voltar'/> -->
</template>

<script>
// import Cronometro from './components/Cronometro.vue'
import corAzul from './components/corAzul.vue'
import corVermelha from './components/corVermelho.vue'

export default {
  name: 'App',
  data(){
    return{
      cor: '',
      idade: 13
    }
  },
  // computada
  computed:{
    // o método diferente do watch não pode usar o nome de uma variavel já existente
    verificarMaiorIdade(){
       return this.idade >= 18 ? 'É maior de idade' : 'É menor de idade' // sempre retorna
    },
    verificaMaiorIdade(){
      return this.idade >= 18 ? true : false 
    }
  },
  watch:{
    cor(novoValor, valorAntigo){ // variavel que quero monitorar
        console.log('Novo valor: '+ novoValor) // se é só um parametro ele vai receber sempre o novo valor
        console.log('Valor antigo: ' + valorAntigo)
    }

  },
  components: {
    corAzul,
    corVermelha
  },
  
  methods:{
    azul(){
        this.cor = "Azul"
    },

    vermelha(){
      this.cor = "Vermelha"

    }


    // voltar(){

    // },
    // iniciar(){
    //   let sec = 0;
    //         let min = 0;
    //         let hora = 0;
    //         setInterval(contagem,1000) 
    //             white(!parar){
                    
    //                 if(sec < 60){
    //                     sec++;
    //                 } else if(sec == 60){
    //                     min++;
    //                     sec =0;
    //                 } else if(min == 60){
    //                     hora++;
    //                     min = 0;
    //                 } else if(hora == 24){
    //                     hora = 0;
                        
    //                 }
    //             }
    // },
    // parar(){

    // }
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
