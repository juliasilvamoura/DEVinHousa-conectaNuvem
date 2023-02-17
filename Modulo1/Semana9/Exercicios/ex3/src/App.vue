<template>

<!-- EX 4 semana 10 -->
  <div class="app">
      
      <div class="row">
        <div class="col-md-4">
          <label>Nome:</label>
          <input type="text" v-model="pessoa.nome">
        </div>

        <div class="col-md-4">
          <label>Idade:</label>
          <input type="number" v-model="pessoa.idade">
        </div>

      </div>


      <button @click="addP">Adicionar</button>
    
    <div class="row">
      <div class="col-12">
        <table class="table">
          <thead>
            <tr >
              <th>Nome</th>
              <th>Idade</th>
              
            </tr>
          </thead>
          <transition-group name="lista" tag="tbody">
            <tr v-for="(p, index) in pessoas" :key="p.id">
              <td v-text="p.nome">Nome</td>
              <td v-text="p.idade">Idade</td>
              <td>
                <button @click="remove(index)" class="btn btn-sm btn-danger">Excluir</button>
              </td>
            </tr>
          </transition-group>
        </table>
      </div>
    </div>
  </div>
</template>

<script>



export default {
  name: 'app',
  data () {
    return {
     show: true,
      pessoas: [],
      pessoa: {}
    }
  },
  methods: {
    addP(){
      this.pessoa.id = (this.pessoas.length - 1).id +1;
      this.pessoas.push(this.pessoa);
      this.pessoa = {}
      }
      // this.pessoas.sort((x,y) =>{
      //   return x.idade > y.idade;
      // })
    },
    remove(index){ // usar filter
      this.pessoas.splice(index, 1);
    }
  
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* LISTA */

.lista-leave-to,
.lista-enter-from{ 
  background-color: black;
  /* background-color: white; */
  opacity: 0;
}

.lista-leave-from,
.lista-enter-to{
  /* background-color: rgb(185, 0, 0); */
  opacity: 1;
  
}

.lista-move,
.lista-leave-active,
.lista-enter-active{
  transition: all 2s;
}

</style>
