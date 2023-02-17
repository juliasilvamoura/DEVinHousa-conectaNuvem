<template>
  <div class="container">
    <my-header v-bind:title="title"></my-header>
    <div class="row">

    <div class="col-12" v-if="autenticado">
      <!-- <router-link to="/auth">Logout</router-link> -->
      <a href="#" @click="logout">Logout</a>
    </div>

    <div class="col-12" v-else>
      <router-link to="/auth">Login</router-link>
    </div>

    <div class="col-12" >
      <router-link to="/reserva/nova">Nova Reserva</router-link>
    </div>
  

    <div class="col-12" >
      <router-link to="/reserva/lista">Lista</router-link>
    </div>
  </div>
  </div>
</template>

<script>
import Header from './../components/header/Header.vue';

export default {
  methods:{
    logout(){
      // localStorage.removeItem('autenticado')
      this.$store.commit('autenticacaoModule/logout')
    }

  },
  data(){
    return{
      title: 'Cadastro e listagem de reservas',
    }
  },

   components:{
    'my-header': Header

  },

  computed: {
    autenticado(){
      // return this.$store.state.autenticadoModule.autentidado;
      // return localStorage.getItem('autenticado')
      return this.$store.state.autenticacaoModule.autenticado;
    }
  },

  mounted(){
    this.$store.state.autenticacaoModule.autenticado = localStorage.getItem('autenticado')
    
  },
  
}
</script>

<style>

</style>