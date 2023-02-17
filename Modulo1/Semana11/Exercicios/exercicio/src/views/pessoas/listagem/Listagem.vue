<template>
 <div class="text-center" v-if="reservas.length === 0">Não há reservas cadastradas</div>

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
 data() {
        return {
            cadastros: [],
        }
    },
    methods: {
    excluir(id) {},
  },
}
</script>

<style>

</style>