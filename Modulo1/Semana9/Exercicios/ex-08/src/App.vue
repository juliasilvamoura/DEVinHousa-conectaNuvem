<template>
<div class="app">

<h1>Teste</h1>

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
      <tbody>
        <tr v-for="i in pessoas" :key="i.id">
          <td> {{i.nome}} </td>
          <td> {{i.idade}} </td>
        </tr>
      </tbody>
    </table> 

</div>
  
</template>

<script>
import { Form, Field, defineRule} from 'vee-validate'

defineRule("required",value =>{
  if(!value || value.length ===0){
    return 'Campo obrigatório'
  }
  return true;
});


export default {
  name: 'App',
  data(){
    return{
      schema: {
          nome: "required",
          idade: "required"
          
        },
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
      this.pessoa = {}
      console.log(this.pessoas)
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
</style>
