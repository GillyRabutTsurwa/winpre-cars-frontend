<template>
  <div class="brand-container">
    <figure v-for="(currentLogo, index) in logos" :key="index">
      <NuxtLink :to="{ name: 'inventory', query: { brand: currentLogo } }" aria-disabled="true">
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
const logos = ["toyota", "honda", "hyundai", "chevrolet", "kia", "dodge", "mazda", "ford", "mitsubishi", "nissan", "volkswagen", "bmw", "audi", "mercedes", "gmc", "subaru", "acura", "lexus", "infiniti"];
</script>


<style lang="scss" scoped>
@use "@/assets/sass/abstracts" as abstracts;

// NOTE: this is a grid item
.brand-container {
  width: 75%;
  margin: 0 auto;
  grid-column: 1 / -1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @include abstracts.breakpoint(480) {
    width: 100%;
  }

  img {
    width: 15rem;
    height: 15rem;
    margin: 5rem;
    // NOTE: found grayscaling solution for svgs thanks to: https://codepen.io/sosuke/pen/Pjoqqp
    //NOTE: the colour I put in the input was #444
    filter: invert(24%) sepia(2%) saturate(0%) hue-rotate(342deg) brightness(96%) contrast(86%);

    @include abstracts.breakpoint(480) {
      width: 10rem;
      height: 10rem;
      margin: 1rem;
      filter: none;
    }

    &:hover {
      filter: none;
    }
  }
}
</style>