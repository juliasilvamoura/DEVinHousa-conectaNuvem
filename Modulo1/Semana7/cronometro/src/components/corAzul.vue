<template>
    <button type="button" class="btn btn-primary" @click="setarCorAzul">Azul</button>
</template>

<script>
export default {
    methods:{
        setarCorAzul(){
            this.$emit('corSelecionada', 'Azul')
        }
    }
}



</script>

<style>

</style>