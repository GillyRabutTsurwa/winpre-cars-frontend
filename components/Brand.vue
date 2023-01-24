<template>
  <div class="brand-container">
    <figure v-for="(currentLogo, index) in logos" :key="index">
      <NuxtLink :to="`/${currentLogo}`" aria-disabled="true">
        <img :src="images[currentLogo]" />
      </NuxtLink>
    </figure>
  </div>
</template>
<script setup>
import { filename } from "pathe/utils";

const glob = import.meta.glob("~/assets/svg/*.svg", { eager: true });
const images = Object.fromEntries(Object.entries(glob).map(([key, value]) => [filename(key), value.default]));

const imageName = "bmw";
console.log(images[imageName]);
const logos = ["mitsubishi", "bmw", "hyundai", "honda", "nissan", "kia", "chevrolet", "ford"];
</script>


<style lang="scss" scoped>
// NOTE: this is a grid item
.brand-container {
  width: 75%;
  margin: 0 auto;
  grid-column: 1 / -1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  img {
    width: 15rem;
    height: 15rem;
    margin-right: 15rem;
  }
}
</style>