<template>
  <div class="text-center
  ">
      <img src="../../assets/logo.png" alt="logo">
      <hr>
      <h1 v-text="title"></h1>
      <hr>
  </div>
</template>

<script>
export default {
    props:['title']
}
</script>

<style scoped>

img{
    width: 300px;
}
</style>>

