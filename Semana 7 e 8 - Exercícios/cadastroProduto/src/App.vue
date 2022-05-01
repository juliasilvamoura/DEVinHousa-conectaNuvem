<template>
    <div class="app">
      <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">Adicionar Produto</button>
       
       <div class="modal-produto">
        <ModalFormularioProdutos @produtoSalva="adicionarProduto"/>
      </div>

      <div class="tabela-produtos mt-5">
        <TabelaProdutos :listProduto="listProduto" @excluir="excluir"/>
      </div>

      <div id="rodape">
        <div class="container">
          <div class="total-valor">
            <p>Valor: R${{ totalValores}}</p>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
import ModalFormularioProdutos from './components/ModalFormularioProdutos.vue'
import TabelaProdutos from './components/TabelaProdutos.vue'

export default {
  name: 'App',

  data(){
    return{
      listProduto: [],
      totalValores: 0
    }
  },
  components: {
    ModalFormularioProdutos,
    TabelaProdutos
  },
  methods:{
    adicionarProduto(event){
      console.log("salvar")
      this.listProduto.push({
        "produto":event.produto,
        "valor":event.valor
        // "wasValidade":false
      })
      this.calcularValores() 
    },
    excluir(event){
      this.listProduto.splice(event, 1)
      this.calcularValores()
    },
    
    calcularValores(){
      this.totalValores = 0
      this.listProduto.forEach(produtos => {
        this.totalValores += Number(produtos.valor) 
      })
    
    }
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
  
}

#rodape{
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #33526E;
  color: white;
}
</style>
