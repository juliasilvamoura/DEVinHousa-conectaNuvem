<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/">Home</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/pessoas/cadastro">Cadastro</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/pessoas/listagem">Listagem</router-link>
          </li>

          <li class="nav-item">
            <div class="col-12">
              <router-link to="/user/cadastro">Novo Usuário</router-link>
            </div>
          </li>

          <li class="nav-item">
            <div v-if="autenticado">
              <a href="#" @click="logout">Logout</a>
            </div>
            <div v-else>
              <router-link to="/user/cadastro">Login</router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      // localStorage.removeItem('autenticado')
      this.$store.commit("autenticacaoModule/logout");
      this.$router.push("/");
    },
  },
  computed: {
    autenticado() {
      // return this.$store.state.autenticadoModule.autentidado;
      // return localStorage.getItem('autenticado')
      return this.$store.state.autenticacaoModule.autenticado;
    },
    user() {
      return this.$store.state.userModule.user;
    },
  },

  mounted() {
    this.$store.state.autenticacaoModule.autenticado = localStorage.getItem(
      "token"
    )
      ? true
      : false;
  },
};
</script>

<style>
ul {
  display: flex;
  gap: 10px;
}
</style>