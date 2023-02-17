<template>
      <div class="row">
      <div class="col-md-4">
        <label>Id:</label>
        <input type="number" v-model="id" />
        <button class="btn btn-primary" @click="buscaPessoa">GET/ID</button>
        <div>{{ cadastro }}</div>
      </div>
      <div class="col-md-3">
        <button class="btn btn-primary" @click="buscaPessoas">GET</button>
      </div>

      <div class="listagem">
        <div class="text-center" v-if="cadastros.length === 0">
          Não há reservas cadastradas
        </div>

        <table class="table" v-else>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Data</th>
              <th>CEP</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in cadastros" :key="i.id">
              <td>{{ i.id }}</td>
              <td>{{ i.nome }}</td>
              <td>{{ i.data }}</td>
              <td>{{ i.cep }}</td>
              <td> <button @click="excluir(i.id)">Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>

export default {
  data(){
    return{
      id: 0,
      // users: [],
      // user: {}
      cadastro: {},
      cadastros: [],
      mensagem: "",

    }
  },
  methods:{
    buscaPessoa() {
      this.$store.dispatch('cadastroModule/salvar', this.cadastro.id)
      .then(() =>{
                this.$router.push('/');
            })

      // const promise = axios.get(
      //   `https://627bb940b54fe6ee008db865.mockapi.io/pessoas/pessoa/${this.id}`
      // );
      // await promise
      //   .then((response) => {
      //     this.cadastro = response.data;
      //   })
      //   .catch((error) => {
      //     alert(error);
      //   });
    },

    buscaPessoas() {


      // const promise = axios.get(
      //   "https://627bb940b54fe6ee008db865.mockapi.io/pessoas/pessoa"
      // );
      // await promise
      //   .then((response) => {
      //     this.cadastros = response.data;
      //   })
      //   .catch((error) => {
      //     alert(error);
      //   });
    },
  }
}
</script>

<style>

</style>