<template>
  <dir class="compras">
      <div class="formulario-compra">
          <form>
              <div class="mb-3">
                  <label for="nome-produto" class="form-label">Produto</label>
                  <input type="text" class="form-control" id="nome-produto" v-model="produto.nome">
                  <span v-if="erroNome" class="msg-error">{{ mensagemErro }}</span>
                </div>
                <div class="mb-3">
                    <label for="valor-produto" class="form-label">Valor</label>
                    <input type="number" class="form-control" id="valor-produto" v-model="produto.valor">
                    <span v-if="erroValor" class="msg-error">{{ mensagemErro }}</span>
                </div>
                <button type="submit" class="btn btn-salvar" @click="adicionarProduto">Salvar</button>
                <button type="submit" class="btn btn-cancelar" v-on:click="cancelarCadastro">Cancelar</button>
            </form>
      </div>
        <hr/>
      <div class="lista-produto">
          
      </div>
  </dir>
</template>

<script>
export default {
    data(){
        return{
            produto:{
                nome: null,
                valor: null
            },
            mensagemErro:null,
            erroNome: false,
            erroValor:false,
            listaProdutos: []
        }
    },
    methods:{
        adicionarProduto(){
            if(this.validaCampos(this.produto)){ // não se deve valider e inserir no mesmo método
                this.listaProdutos.push(this.produto);
            } 
        },

        validaCampos(produto){
            if(! produto.nome){
                this.mensagemErro= "O campo nome é obrigatório";
                this.erroNome = true;
                return false
            }else if(! produto.valor){
                this.mensagemErro= "O campo valor é obrigatório";
                this.erroValor = true;
                return false
            } return true;
        },

        cancelarCadastro(){
            this.produto.nome = null;
            this.produto.valor= null;
        }
    },


    // watch:{ // monitora as variaveis
    //     produto(){
    //         this.erroNome = false
    //         this.erroValor = false

    //     }
    // }
}
</script>

<style scoped>
    .btn.btn-cancelar{
        margin-left: 30px;
    }
    .msg-error{
        color: red;
    }
</style>