<template>
  <div id="app">
    <NavBar/>

    <router-view></router-view>
    <hr>
  </div>

</template>


<script>

import NavBar from './components/shared/navbar/NavBar.vue'
export default {
  components:{
    NavBar
  }

}
</script>

<style>

</style>