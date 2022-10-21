<template>
    <div class="aluno">
        <h1>Componente filho</h1>
        {{ nomeAluno }}
    </div>
  
</template>

<script>
export default {
    props: {
        nomeAluno: { // passar propriedade como objeto 
        type:String,
        default: 'Julia'

        }
    }

}
</script>

<style>

</style>