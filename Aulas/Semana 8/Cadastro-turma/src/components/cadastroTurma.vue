<template>
  <h1>Porcentagem de vagas preenchidas</h1>
  <p class="resultado">  <span>{{ resultado }}</span>%</p>
  <p v-if="resultado == 100"> {{ chamaAlert }}</p>
  <button class="adiciona" @click="criarCadastro">Cadastra uma pessoa</button>
  <button class="subrai" @click="cancelaCadastro">Cancela cadastro</button>
</template>

<script>
export default {
    data(){
        return {
            contador: 0
        }
    },
    props:{
        vagasTurma:{
            type:Number, 
            require: true
        }
    },
    methods:{
        criarCadastro(){
            Number(this.contador++)
        },
        cancelaCadastro(){
            Number(this.contador--)
        }
    },
    computed:{
        resultado(){
            console.log(this.vagasTurma)
            return Number((this.contador / this.vagasTurma) * 100 )
        },
        chamaAlert(){
            return alert('Turma lotada')
        }
    }
}
</script>

<style>

</style>