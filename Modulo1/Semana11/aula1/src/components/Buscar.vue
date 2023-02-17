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
    computed:{
    cadastros(){
      return this.$store.state.cadastroModule.cadastros
    }
  },
  methods:{
    buscaPessoa() {
      this.$store.dispatch('cadastroModule/', this.cadastro.id)
      // .then(() =>{
      //           this.$router.push('/');
      //       })
    },
    excluir(id){
        this.$$store.dispatch('cadastroModule/excluir', id)
         console.log('entrou')
        // axios.delete(`https://627bb940b54fe6ee008db865.mockapi.io/pessoas/pessoa/${id}`, {
        // }).then((response) => {
        //   console.log(response)
        // })
      },

    // load(){
      
    // },
  },mounted(){
    this.$store.dispatch('cadastroModule/load')
    this.$store.dispatch('cadastroModule/buscaPessoa')
  }
}
</script>

<style>

</style>