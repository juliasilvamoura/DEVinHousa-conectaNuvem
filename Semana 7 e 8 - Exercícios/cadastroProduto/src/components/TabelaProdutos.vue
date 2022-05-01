<template>
  <div class="tabela-produtos container">
      <h3>Produtos cadastrados</h3>
      <table class="table" v-if="listProduto.length > 0">
        <thead>
            <tr>
            <th scope="col">Produto</th>
            <th scope="col">Valor</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(produtos, indice) in listProduto" :key="indice">
                <td>{{ produtos.produto }}</td>
                <td>{{ produtos.valor}}</td>
                <td>
                    <button type="button" class="btn btn-danger ms-3" @click="excluir">Excluir</button> <!-- ms margem esquerda-->
                </td>
            </tr>
        </tbody>
        </table>
<span v-else>Não existe dado para ser exibido</span>
  </div>
</template>

<script>
export default {
    props:{
        listProduto: {
            type: Array,
            require: true,
            default: null
        }
    },
    methods:{
        excluir(indice){
            this.$emit('excluir', indice)
        }
    }
}
</script>

<style>
    table{
        background-color: white;
    }
</style>