<template>
  <div class="container">
    <my-header v-bind:title="title"></my-header>
    <router-view></router-view>
        
  </div>
</template>

<script>
import Header from './../../components/header/Header.vue';

export default {
  data(){
    return{
        // show: true,
        title: 'Cadastro e listagem de reservas',
        // reserva: {},
        // reservas: [],
        // tempo: "00:00:00.000",
        // valor: 0,
        // mili: 0,
        // seconds: 0,
        // hours:0
    }
  },
  components:{
    'my-header': Header

  },
  
}
</script>

<style>

</style>
