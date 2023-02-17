<template>
<router-view></router-view>
  <!-- <div>
    <button @click="buscaUsers">GET</button>
    <button @click="buscaUser">GET/ID</button>
    <button @click="salvaUsers">POST</button>
    <button @click="atualizaUsers">PUT</button>
    <button @click="excluiUsers">DELETE</button>
  </div>
  <input type="text" v-model="id">
  {{user}} -->


 
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

  },
};
</script>

<style>
</style>
