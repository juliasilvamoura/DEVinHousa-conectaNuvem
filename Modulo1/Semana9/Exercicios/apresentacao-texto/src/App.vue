<template>
  <div id="app">
    <!-- <h1 class="h1" :style="myStyle">Mensagem</h1>
    <input type="text" v-model.lazy="myStyle.color"> -->

    <label :class="myClass">Mudando minha cor</label>
    <button @click="myClass='colorBlack'">Mostra label preto</button>
    <button @click="myClass='colorRed'">Mostra label vermelho</button>
    <button @click="myClass='colorGreen'">Mostra label verde</button>


    
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      // myStyle:{
      //   color: null
      // }
      myClass: ''

    }
  },
  methods:{
    
  }
}
</script>

<style>

.colorBlack{
  color:black
}

.colorRed{
  color: red;
}

.colorGreen{
  color: green;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
