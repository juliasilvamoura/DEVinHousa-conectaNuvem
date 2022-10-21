<template>
    <div class="app">
      <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">Adicionar Movimentação</button>
      <div class="modal-movimenta">
        <ModalFormularioMovimentacao @movimentacaoSalva="adicionarMovimentacao"/>
      </div>
      <div class="tabela-movimentacoes mt-5">
        <TabelaMovimentacoes :movimentacoes="movimentacoes" @excluir="excluir"/>
      </div>
      <div id="rodape">
        <div class="container">
          <div class="total-receita">
            <p>Receita: R${{ totalReceitas}}</p>
          </div>
          <div class="total-despesas">
            <p>Despesas: R${{ totalDespesas }}</p>
          </div>
          <div class="saldo">
            <p>Saldo: R${{ saldo }}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import ModalFormularioMovimentacao from './components/ModalFormularioMovimentacao.vue'
import TabelaMovimentacoes from './components/TabelaMovimentacoes.vue'

export default {
  name: 'App',

  data(){
    return{
      movimentacoes: [],
      totalReceitas: 0,
      totalDespesas: 0,
      saldo: 0
    }
  },
  components: {
    ModalFormularioMovimentacao,
    TabelaMovimentacoes
  },
  methods:{
    adicionarMovimentacao(event){
      this.movimentacoes.push({
        "titulo":event.titulo,
        "descricao":event.descricao,
        "valor":event.valor,
        "tipo":event.tipo,
        "data":event.data,
        // "wasValidade":false
      })
      this.calcularValores() 
    },
    excluir(event){
      this.movimentacoes.splice(event, 1)
      this.calcularValores()
    },
    // calcularValores(){
    //   this.movimentacoes.forEach(movimentacao => {
    //     if(movimentacao.tipo == "Despesas" && !movimentacao.wasValidade){
    //       this.totalDespesas += Number(movimentacao.valor)
    //       movimentacao.wasValidade = true
    //     }
    //     if(movimentacao.tipo == "Movimentação" && !movimentacao.wasValidade){
    //       this.totalReceitas += Number(movimentacao.valor)
    //       movimentacao.wasValidade = true
    //     }
    //     this.saldo = this.totalReceitas - this.totalDespesas
    //   })
    
    // },
    calcularValores(){
      this.totalReceitas = 0
      this.totalDespesas = 0
      this.saldo = 0
      this.movimentacoes.forEach(movimentacao => {
        if(movimentacao.tipo == "Despesas"){
          this.totalDespesas += Number(movimentacao.valor)
          
        }
        if(movimentacao.tipo == "Movimentação"){
          this.totalReceitas += Number(movimentacao.valor)
          
        }
        this.saldo = this.totalReceitas - this.totalDespesas
      })
    
    },
  }
}
</script>

<style>
body{
  background-color: #5C9BA4;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2e445a;
  margin-top: 60px;
  /*  */
}

#rodape{
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #33526E;
  color: white;
}
</style>
