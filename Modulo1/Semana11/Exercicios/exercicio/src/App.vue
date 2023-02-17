<template>
  <div id="app">
    <NavBar/>
    <router-view></router-view>
  </div>

</template>


<script>

import NavBar from './components/shared/navbar/NavBar.vue'
import axios from 'axios'

export default {
  components:{
    NavBar
  },
  data(){
    return{
      id: 0,
      cadastro: {},
      cadastros: [],
    }
  },

  methods:{
   

  }

}
</script>

<style>

</style>