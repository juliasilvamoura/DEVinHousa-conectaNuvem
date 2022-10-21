<template>
  <div class="tabela-alunos" v-show="listaAlunos.length > 0">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nome</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(aluno, indice) in listaAlunos" :key="indice">
                        <td>{{ indice + 1 }}</td>
                        <td>{{ aluno }}</td>
                        <td>
                            <button type="button" class="btn btn-danger" @click="excluirAluno(indice)">Excluir</button>
                        </td>
                    </tr>
                </tbody>
            </table>
      </div>
      <div class="mensagem-tabela-vazia" v-if="listaAlunos.length == 0">
          <h3 v-text="mensagemTabelaVazia"></h3>
      </div>
</template>

<script>
export default { // pai pra filho é props
    name: 'tabelaAluno',
    props:{
        listaAlunos:{
            type:Array,
            requere:false

        }
    },
    methods: {
        excluirAluno(indice){
            // this.listaAlunos.splice(indice); 
            // $emite (nome do evento (pode ser qualquer nome), parametro)
            this.$emit('excluirAluno', indice) // comunicação filho pra pai (eventos)
        } 
    }
}
</script>

<style>

</style>