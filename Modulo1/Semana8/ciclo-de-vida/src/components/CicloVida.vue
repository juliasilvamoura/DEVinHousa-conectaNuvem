<template>
  <div class="ciclo-vida">
      <h1>Ciclo de vida de um componente Vue</h1>
      <!-- <div class="lista-nomes" v-for="nomes in nome" :key="nomes">
          <p>{{ nomes }}</p>
      </div> -->
      <p>Insira o nome</p>
      <input type="text" v-model="nome"/>
  </div>
</template>

<script>
export default {
    data(){
        return{
            nome: null
        }
    },
    beforeCreate(){
        // pode colocar uma função, classe, importe e etc
        console.log('Primeiro suspiro')
    },
    created(){
        console.log('Criado!')
    },
    beforeMount(){
        // console.log("Antes de ser montado")
        // this.nome = ['Julia', 'Kaua', 'Maycon']
    },
    mounted(){
        console.log("Componente foi renderizado")
    },
    beforeUpdate(){
        console.log("Está sendo preparado para atualizar")
        alert("Está sendo preparado para atualizar")
    },
    updated(){
        console.log('Componente Atualizado')
    },
    beforeDestroy(){
        console.log('Eu vou cair')
    },
    destroyed(){
        console.log('Finish!')
    }
}
</script>

