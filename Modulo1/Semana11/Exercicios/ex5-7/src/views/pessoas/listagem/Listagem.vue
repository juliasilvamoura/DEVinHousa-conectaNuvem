<template>
  <div class="listagem">
    <h1>Listagem</h1>
    <hr />
    <router-link to="/">Home</router-link>

    <div class="text-center" v-if="cadastros.length === 0">
      Não há pessoas cadastradas
    </div>

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
  </div>
</template>

<script>
export default {
  name: "listagem",
  data() {
    return {
      cadastros: [],
    };
  },
  methods: {
    excluir(id) {},
  },
};
</script>

<style>
</style>