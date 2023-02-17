<template>
  <div id="app">
    <!-- Coloca no h1 pois ele tem o controle do show -->
    <!-- <transition name="header">
    <h1 v-show="show">Header</h1>
    </transition>
    <button @click="show= !show">Alterar estado</button> -->


  <!-- Não funciona no Vue 2 -->
   <!-- Transition só aceita um elemento -->
    <!-- <transition name="header">
      <h1 v-if="show">Nome 1</h1> 
      <h1 v-else>Nome 2</h1>
    </transition> 
    <button @click="show= !show">Alterar estado</button> -->

  <input type="number" v-model="numero">
    <!-- <ul>
      <li v-for="(i,index) in lista" :key="index" v-text="i"></li>
    </ul> -->
  <button @click="add">Adicionar</button>
    <transition-group name="lista" tag="ul">
      <li v-for="i in lista" :key="i" v-text="i"></li>
    </transition-group>

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
      numero: 0,
      lista: [1,2,3],
      pessoas: [{
        id:0,
        nome:'Julia',
        idade: 23
      },{
        id: 1,
        nome: 'Pessoa2',
        idade: 64


      }
      ]
    }
  },
  methods:{
    add(){
      this.lista.push(Number(this.numero))
      this.lista.sort(
      //   (x,y) => {
      //   return x > y;
      // }
      ); //ordena, posso colocar a ordem que eu quiser
    },
    addP(){
      this.pessoas.push({
        id: this.pessoas[this.pessoas.length - 1].id +1,
        nome: "qualquer",
        idade: 50
      })
      // this.pessoas.sort((x,y) =>{
      //   return x.idade > y.idade;
      // })
    },
    remove(index){ // usar filter
  this.pessoas.splice(index, 1);
    }
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

/* Primeiro quadro de estilo */
.header-leave-to,
.header-enter-from{ 
  background-color: black;
  /* background-color: white; */
  opacity: 0;
  font-size: 0px;
}

.header-leave-from,
.header-enter-to{
  /* background-color: rgb(185, 0, 0); */
  opacity: 1;
  font-size: 2.5em;
}

.header-leave-active,
.header-enter-active{
  transition: all 2s;
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
