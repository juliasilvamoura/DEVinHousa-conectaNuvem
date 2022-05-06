<template>
  <vid class="header">
      <header>
          <title v-text="titulo"></title>
      </header>
  </vid>
</template>

<script>
export default {
    props:{
        titulo: {
            type: String
        }
    }
}
</script>

<style>

</style>