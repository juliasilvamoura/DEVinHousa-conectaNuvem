<template>
<div class="container">
    <div class="row">
        <div class="col-12">
            <label for="">Email</label>
            <input type="email" class="formcontrol" v-model="login.email">
        </div>
        <div class="col-12">
            <label for="">Senha</label>
            <input type="password" class="formcontrol" v-model="login.password">
        </div>
        <div class="col-12">
            <button class="btn btn-primary" @click="autenticar">Login</button>
        </div>
    </div>
</div>
  
</template>

<script>
export default {
    data(){
        return{
            login: {}
        }
    },
    methods: {
        autenticar(){
            // this.$store.commit('autenticacaoModule/autenticar', this.login)
            this.$store.dispatch('autenticacaoModule/autenticar', this.login)
            .then(() =>{
                this.$router.push('/');
            })

            // if(this.$store.state.autenticacaoModule.autenticado){
            //     this.$router.push('/reserva');

            // }
        }
    }

}
</script>