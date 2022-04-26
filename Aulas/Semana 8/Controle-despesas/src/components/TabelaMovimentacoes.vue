<template>
  <div class="tabela-movimentacoes container">
      <h3>Extrato de Mvimentações</h3>
      <table class="table " v-if="movimentacoes.length > 0">
        <thead>
            <tr>
            <th scope="col">Data</th>
            <th scope="col">Titulo</th>
            <th scope="col">Tipo</th>
            <th scope="col">Valor</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(movimentacao, indice) in movimentacoes" :key="indice">
                <td>{{ movimentacao.data }}</td>
                <td>{{ movimentacao.titulo }}</td>
                <td>{{ movimentacao.tipo }}</td>
                <td>{{ movimentacao.valor}}</td>
                <td>
                    <button type="button" class="btn btn-primary">Editar</button>
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
        movimentacoes: {
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