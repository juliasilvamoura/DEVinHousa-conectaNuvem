<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <!-- <div class="col-12 row">
        <div class="col-3" style="border: 1px solid black">
        <h1> {{ $store.state.display}} </h1>
      </div>
      </div>
      <div class="col-3 mt-3">
          <input type="text" class="form-control" v-model="display">
        </div>
      <button class="btn btn-primary">Alterando display</button>
      </div> -->
        <div class="col-4">
          <h4>{{ $store.gatters.tempo}}</h4>
        </div>
        <div class="col-12">
          <button @click="inicializar" :disabled="$store.state.cron.actived">Inicializar</button>
          <button @click="parar" :disabled="!$store.state.cron.actived">Parar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      display: "",
      texto: 'valor',
      disabled: true
    };
  },
  methods: {
    alterarDisplay() {
      // this.$store.state.display = this.display;
      this.$store.commit("updateDisplay", this.display);
    },
    inicializar(){
      this.disabled = true;
      // this.$store.state.cron.actived = true;
      this.$store.dispatch('start',null, {module: 'cron'});
    },
    parar(){
      // this.$store.commit('parar');
      this.disabled = true;
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
