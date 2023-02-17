<template>
  <div id="app">
    <p v-text="msg"></p>
      <input type="text" v-model.lazy="msg"/>
      <input type="text" :value="msg">
      
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      colorLabel: '',
      msg: 'msg',
      html: "<input type='number' calss='colorRed'/>"
    }
  },
  methods:{
    trocaMensagem(){
      this.msg= 'Nova Mensagem';
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
.colorRed{
  color: red;
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
