<template>
 <div class="text-center" v-if="cadastros.length === 0">Não há reservas cadastradas</div>

    <!-- <div v-show="reservas.length === 0">Não há reservas cadastradas</div> -->

    <table class="table" v-else>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Data Nascimento</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in cadastros" :key="i.id">
          <td>{{ i.nome }}</td>
          <td>{{ i.dataNascimento }}</td>
          <td>
            <button class="btn btn-danger" @click="excluir(i.id)">
              Excluir
            </button>
          </td>
        </tr>
      </tbody>
    </table>
</template>

<script>
export default {
//  data() {
//         return {
//             cadastros: [],
//         }
//     },
    computed:{
      cadastros(){
        return this.$store.state.cadastroModule.cadastros;
      }

    },
    methods: {
    excluir(id) {
      this.$store.commit('cadastroModule/delete')
    },
  },
}
</script>

<style>

</style>