<template>
  <h1>Cadastro</h1>
  <!-- <router-link to="/">Home</router-link> -->
  <!-- <a href="/"> Home </a>  -->
  <!-- ancora recarrega a pagina o hashHistory não se usar só webHistory ele recarrega-->

  <hr />
  <router-view></router-view>

  <hr />
  <router-link to="/">Home</router-link>

  <!-- ----------------------------------------------------------------------- -->
  <Form @submit="salvar" :validation-schema="schema" v-slot="{ errors }">
    <div class="mb-3">
      <label for="nome" class="form-label">Nome</label>
      <Field type="email" class="form-control" id="nome"/>
      <span class="text-danger" v-show="errors.nome">{{ errors.nome }}</span>
    </div>

    <div class="mb-3">
      <label for="dataNascimento" class="form-label">Data Nascimento</label>
      <Field type="date" class="form-control" id="dataNascimento" />
      <span class="text-danger" v-show="errors.dataNascimento">{{ errors.dataNascimento }}</span>
    </div>
    <button type="submit" class="btn btn-primary">Salvar</button>
  </Form>
</template>

<script>
import {Form, Field, defineRule} from 'vee-validate'

export default {
  name: "cadastro",
  components:{
    Form,
    Field
  },
  data(){
    defineRule("required", value => {
                if (!value || value.length === 0) {
                    return "Campo obrigatório"
                }
                return true;
            });
    defineRule("nomeCompleto", value => {
      let nomeCompleto = value.split()
      if (nomeCompleto.length < 2) {
                    return "Nome completo"
                }
                return true;
            });
    defineRule("validaData", value => {
                if (new Date(value) > new Date()) {
                    return "Data invalida"
                }
                return true;
            });
    const schema ={
      nome: "required|nomeCompleto",
      dataNascimento: "required|validaData"
    }
    return{
      schema,
      cadastro: {}
    }
  },
  methods: {
    salvar() {
      this.cadastro
    }
  }
};
</script>

<style>
</style>