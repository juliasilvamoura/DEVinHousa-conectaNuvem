<template>
  <div class="container">
    <my-header v-bind:title="title"></my-header>
    <div class="row" v-if="autenticado">

    <div class="col-12" >
      <!-- <router-link to="/auth">Logout</router-link> -->
      <a href="#" @click="logout">Logout</a>
    </div>

    <div class="col-12" >
      <router-link to="/cadastro">Cadastro</router-link>
    </div>

    <div class="col-12" >
      <router-link to="/buscar">Pesquisar</router-link>
    </div>

    <div class="col-12" >
      <router-link to="/user">Novo Usuário</router-link>
    </div>

  </div>

    <div class="row" v-else>
      <div class="col-12 mt-2" >
        <router-link to="/auth">Login</router-link>
    </div>
  </div>
 
  </div>
</template>

<script>

export default {
  methods:{
    logout(){
      // localStorage.removeItem('autenticado')
      this.$store.commit('autenticacaoModule/logout');
      this.$router.push('/');
    }

  },
  data(){
    return{
      
    }
  },
  computed: {
    autenticado(){
      // return this.$store.state.autenticadoModule.autentidado;
      // return localStorage.getItem('autenticado')
      return this.$store.state.autenticacaoModule.autenticado;
    },
    user(){
      return this.$store.state.userModule.user;
    }
  },

  mounted(){
    this.$store.state.autenticacaoModule.autenticado = localStorage.getItem('token') ? true : false
    
  },
  
}
</script>