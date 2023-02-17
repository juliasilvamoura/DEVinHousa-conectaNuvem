<template>
  <div id="app">
   <!-- <div v-if="show">
     <h1>Mostrando conteudo</h1>
   </div>
   <div v-else>
     <h1>Caso contrario</h1>
   </div>
   <button @click="show = !show">Alterar Estado</button> -->

  <div>
    <h1  v-text="'Cabeçalho'" v-demo></h1>
    <div v-demo>
      <label for="">Label</label>
      <input type="text" >
    </div>
  </div>



   <ul>
     <li v-for="(elemento, i) in lista" :key="i">
       {{ i + ' - ' + elemento }}
     </li>
   </ul>

   <table>
     <tr>
     <th>Nme</th>
     <th>Idade</th>
     </tr>
     <tr v-for="(p, index) in pessoas" :key="index">
       <td>{{ index }}</td>
       <td v-text="p.nome"></td>
       <td>{{ p.idade }}  </td>
      <button @click="del">Delete</button>
     </tr>
   </table>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      // show: true
      objeto:{
        var1: 'A',
        var2: 0,
        var3: false
      },
      lista: ['Elem1', 'Elem2', 'Elem3'],
      pessoas:[{
        nome: 'Julia',
        idade: 23
      },{
        nome: 'Jose',
        idade: 50
      }
      ]
    }
  },
  methods:{
    del(index){
    this.pessoas.splice(index,1)
    }
  }
}
</script>

<style>

</style>
