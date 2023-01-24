<template>
  <figure></figure>
</template>

<script setup>
</script>

<style lang="scss" scoped>
// NOTE: les image prets a utiliser: 2, 3, 5, 8, 9
figure {
  width: 100%;
  height: calc(100vh - 15rem);
  background-image: url(../assets/img/banner-8.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: -15rem;
  background-attachment: fixed;
}
</style>