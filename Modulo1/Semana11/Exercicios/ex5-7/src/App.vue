<template>
  <!-- <div>
    <button @click="buscaUsers">GET</button>
    <button @click="buscaUser">GET/ID</button>
    <button @click="salvaUsers">POST</button>
    <button @click="atualizaUsers">PUT</button>
    <button @click="excluiUsers">DELETE</button>
  </div>
  <input type="text" v-model="id">
  {{user}} -->
  <div class="app">
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

    <hr />

    <div class="formulario">
      <!-- <Form @submit="salvar" :validation-schema="schema" v-slot="{ errors }"> -->
      <form>
        <div class="mb-3">
          <label for="nome" class="form-label">Nome</label>
          <input
            type="email"
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
  </div>
</template>

<script>
import axios from "axios";
// import {Form, Field, defineRule} from 'vee-validate'

export default {
  // components:{
  //   Form,
  //   Field
  // },
  data() {
    // defineRule("required", value => {
    //             if (!value || value.length === 0) {
    //                 return "Campo obrigatório"
    //             }
    //             return true;
    //         });
    // defineRule("nomeCompleto", value => {
    //   let nomeCompleto = value.split()
    //   if (nomeCompleto.length < 2) {
    //                 return "Nome completo"
    //             }
    //             return true;
    //         });
    // defineRule("validaData", value => {
    //             if (new Date(value) > new Date()) {
    //                 return "Data invalida"
    //             }
    //             return true;
    //         });
    // const schema ={
    //   nome: "required|nomeCompleto",
    //   dataNascimento: "required|validaData"
    // }
    return {
      // schema,
      id: 0,
      // users: [],
      // user: {}
      cadastro: {},
      cadastros: [],
      mensagem: "",
    };
  },
  methods: {
    //  async buscaUsers(){
    //     const promise = axios.get('https://62799b2f73bad506857aeff1.mockapi.io/api/v1/users')
    //     // name: 'teste',
    //       // email:'teste2'
    //      await promise.then((response) => {
    //         this.users = response.data;
    //       }).catch((error) => {
    //         console.log(error)
    //       })
    //     console.log(this.users)
    //   },
    //   async buscaUser(){
    //     const promise = axios.get(`https://62799b2f73bad506857aeff1.mockapi.io/api/v1/users/${this.id}`)
    //     // name: 'teste',
    //       // email:'teste2'
    //      await promise.then((response) => {
    //         this.user = response.data;
    //       }).catch((error) => {
    //         console.log(error)
    //       })

    //   },
    //   salvaUser(){
    //     axios.post(`https://62799b2f73bad506857aeff1.mockapi.io/api/v1/users/`, {
    //       name: 'Novo Usuario',
    //       email: 'novo@usuario.com.br'
    //     }).then((response) => {
    //       console.log(response.data)
    //     })

    //   },
    //   atualizaUser(){
    //     axios.put(`https://62799b2f73bad506857aeff1.mockapi.io/api/v1/users/${this.id}`, {
    //       name: 'Novo nome',
    //     }).then((response) => {
    //       console.log(response.data)
    //     })

    //   },
    //   excluiUser(){
    //     axios.delete(`https://62799b2f73bad506857aeff1.mockapi.io/api/v1/users/${this.id}`, {

    //     }).then((response) => {
    //       console.log(response)
    //     })

    //   }

    async buscaPessoa() {
      const promise = axios.get(
        `https://627bb940b54fe6ee008db865.mockapi.io/pessoas/pessoa/${this.id}`
      );
      await promise
        .then((response) => {
          this.cadastro = response.data;
        })
        .catch((error) => {
          alert(error);
        });
    },

    async buscaPessoas() {
      const promise = axios.get(
        "https://627bb940b54fe6ee008db865.mockapi.io/pessoas/pessoa"
      );
      await promise
        .then((response) => {
          this.cadastros = response.data;
        })
        .catch((error) => {
          alert(error);
        });
    },

    salvar() {
      // buscarPessoas();
      this.cadastro.id = this.cadastros.length + 1;
      // this.cadastros.push(this.cadastro);
      // this.cadastro = {};
      axios
        .post(`https://627bb940b54fe6ee008db865.mockapi.io/pessoas/pessoa`, {
          nome: this.cadastro.nome,
          data: this.cadastro.data,
          cep: this.cadastro.cep,
          id: this.cadastro.id,
        })
        .then((response) => {
          this.mensagem = response.data;
        })
        .catch((error) => {
          alert(error);
        });
    },
      excluir(id){
        axios.delete(`https://627bb940b54fe6ee008db865.mockapi.io/pessoas/pessoa/${id}`, {
        }).then((response) => {
          console.log(response)
        })
      }
  },
};
</script>

<style>
</style>
