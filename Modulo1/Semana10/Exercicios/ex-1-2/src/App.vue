<template>
<div class="app">
  <!-- <transition name="header">
  <header v-if="show">Apresentando o H1</header>
  <h1 v-else>O header não está mais disponível</h1>
  </transition>
  <button @click="show=!show">Alterar estado</button> -->

<Form @submit="save" :validation-schema="schema" v-slot="{ errors }">
  <div class="mb-3">
    <label for="nome" class="form-label">Nome</label>
    <Field type="text" class="form-control" name="nome" id="nome" v-model="pessoa.nome"/>
    <span class="text-danger" v-show="errors.nome">{{ errors.nome }}</span>
   
  </div>
  <div class="mb-3">
    <label for="idade" class="form-label">Idade</label>
    <Field type="number" class="form-control" id="idade" name="idade" v-model="pessoa.idade"/>
    <span class="text-danger" v-show="errors.nome">{{ errors.idade }}</span>
  </div>
  
  <button type="submit" class="btn btn-primary">Salvar</button>
</Form>

<hr>

<div class="text-center" v-if="pessoas.length === 0">Não há reservas cadastradas</div>

    <table class="table" v-else>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Idade</th>
         
        </tr>
      </thead>

        <transition-group name="pessoas" tag="tbody">
        <tr v-for="i in pessoas" :key="i.id">
          <td>{{ i.nome}}</td>
          <td> {{i.idade}} </td>
        </tr>
      </transition-group>

       <!-- <tbody>
        <tr v-for="i in pessoas" :key="i.id">
          <td> {{i.nome}} </td>
          <td> {{i.idade}} </td>
        </tr>
      </tbody>  -->
    </table> 
</div>
</template>

<script>

import { Form, Field} from 'vee-validate'

export default {
  name: 'App',
    data(){
      return{
        // show: false
        pessoa: {},
        pessoas: []
      }
    },
    components: {
    Form,
    Field
  },
    methods:{
        save(){
          this.pessoa.id=this.pessoas.length +1;
          this.pessoas.push(this.pessoa);
          this.pessoas.sort(function(a,b) {
            return a.idade < b.idade ? -1 : a.idade > b.idade ? 1 : 0;
          });
          this.pessoa = {}
        },
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


/* Primeiro quadro de estilo */
.pessoas-leave-to,
.pessoas-enter-from{ 
  background-color: black;
  /* background-color: white; */
  opacity: 0;
  font-size: 0px;
}

.pessoas-leave-from,
.pessoas-enter-to{
  /* background-color: rgb(185, 0, 0); */
  opacity: 1;
  font-size: 1em;
}

.pessoas-leave-active,
.pessoas-enter-active{
  transition: all 2s;
}
</style>
