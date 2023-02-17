<template>
  <div class="formulario">
      <!-- <Form @submit="salvar" :validation-schema="schema" v-slot="{ errors }"> -->
      <form>
        <div class="mb-3">
          <label for="nome" class="form-label">Nome</label>
          <input
            type="text"
            class="form-control"
            id="nome"
            v-model="cadastro.nome"
          />
          <!-- <span class="text-danger" v-show="errors.nome">{{ errors.nome }}</span> -->
        </div>

        <div class="mb-3">
          <label for="dataNascimento" class="form-label">Data Nascimento</label>
          <input
            type="date"
            class="form-control"
            id="dataNascimento"
            v-model="cadastro.data"
          />
          <!-- <span class="text-danger" v-show="errors.dataNascimento">{{ errors.dataNascimento }}</span> -->
        </div>

        <div class="mb-3">
          <label for="cep" class="form-label">CEP</label>
          <input
            type="number"
            class="form-control"
            id="cep"
            v-model="cadastro.cep"
          />
          <!-- <span class="text-danger" v-show="errors.dataNascimento">{{ errors.dataNascimento }}</span> -->
        </div>

        <button type="submit" class="btn btn-primary" @click="salvar">
          Salvar
        </button>
      </form>

      <div class="text-center">{{ mensagem }}</div>
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
  methods: {
      salvar() {
        
      // buscarPessoas();
      this.cadastro.id = (this.$store.state.cadastroModule.salvar).length +1 ;
      this.$store.dispatch('cadastroModule/salvar', this.cadastro)
      this.cadastro = {}
      // this.cadastros.push(this.cadastro);
      // this.cadastro = {};
      // axios.post(`https://627bb940b54fe6ee008db865.mockapi.io/pessoas/pessoa`, {
      //     nome: this.cadastro.nome,
      //     data: this.cadastro.data,
      //     cep: this.cadastro.cep,
      //     id: this.cadastro.id,
      //   })
      //   .then((response) => {
      //     this.mensagem = response.data;
      //   })
      //   .catch((error) => {
      //     alert(error);
      //   });
    },
      excluir(id){
        axios.delete(`https://627bb940b54fe6ee008db865.mockapi.io/pessoas/pessoa/${id}`, {
        }).then((response) => {
          console.log(response)
        })
      }
  }

}
</script>

<style>

</style>