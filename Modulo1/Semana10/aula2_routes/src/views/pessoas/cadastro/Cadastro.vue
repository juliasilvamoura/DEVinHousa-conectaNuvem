<template>
  <h1>Cadastro</h1>
      <!-- <router-link to="/">Home</router-link> -->
      <!-- <a href="/"> Home </a>  -->
      <!-- ancora recarrega a pagina o hashHistory não se usar só webHistory ele recarrega-->

      <hr>
      <router-view></router-view>
      
      <hr>
      <router-link to="/">Home</router-link>

      <button @click="$router.push('/cadastro/usuario')">Usuário</button>
</template>

<script>
export default {

}
</script>

<style>

</style>