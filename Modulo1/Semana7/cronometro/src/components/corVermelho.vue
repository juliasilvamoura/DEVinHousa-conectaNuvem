<template>
    <button type="button" class="btn btn-danger" @click="setarCorVermelha">Vermelha</button>
</template>

<script>
export default {
    methods:{
        setarCorVermelha(){
            this.$emit('corSelecionada', 'Vermelha')
        }
    }
}



</script>

<style>

</style>