<template>
  <div class="app">
    <div class="obj">
      <label>Objeto</label>
    {{ lista }}
    </div>
    
    <hr>

    <div class="list">
      <ul>
        <li v-for="item in lista" :key="item"> {{ item }} </li>
      </ul>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      lista: ['Item 1', 'Item 2', 'Item 3']
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
.obj{
  margin-top: 50px;
  text-align: center;
}

.list{
  text-align: center;
}

</style>
