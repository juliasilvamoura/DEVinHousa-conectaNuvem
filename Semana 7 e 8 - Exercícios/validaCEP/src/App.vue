<template>
  <div class="app">
    <h1>Consulte um CEP</h1>
    <input type="number" v-model="cep">
    <button class="btn btn-primary" type="submit" @click="validaCep" :disabled="!habilitaBotao">Button</button>
    <div class="resposta">
       <p>Logradouro: {{endereco.logradouro}}</p>
        <p>Bairro: {{endereco.bairro}}</p>
        <p>Localidade: {{endereco.localidade}}</p>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      cep: "",
      endereco: [],
      
    }
  },
  computed:{
    habilitaBotao(){
      return this.cep
    }
  },
  methods:{
    validaCep(){
      const url = `https://viacep.com.br/ws/${this.cep}/json`;
        // this.endereco = await fetch(url)
        // console.log(this.endereco)
        fetch(url)
        .then(resposta => {
          // console.log(resposta.json())
          resposta.json().then(conteudo => this.endereco = conteudo)
            
        })
        .catch(erro =>{
            console.log(erro)
        });
    }
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
