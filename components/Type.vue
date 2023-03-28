<template>
  <ul class="type-container">
    <li v-for="(currentType, index) in typeLogos" :key="index" class="type">
      <NuxtLink :to="{ path: 'inventory', query: { type: currentType } }" aria-disabled="true">
        <img :src="types[currentType]">
        <h4>{{ typeNameText[index] }}</h4>
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
import { filename } from "pathe/utils";

const glob = import.meta.glob("~/assets/svg/*.svg", { eager: true });
const types = Object.fromEntries(Object.entries(glob).map(([key, value]) => [filename(key), value.default]));

const typeName = "sedan";
console.log(types[typeName]); //TESTINGPASS
const typeLogos = ["sedan", "suv", "hatchback", "sports-car", "truck"];
const typeNameText = ["Sedan", "SUV", "Hatchback", "Sports Car", "Pick-up Truck"];
</script>

<style lang="scss" scoped>
@use "@/assets/sass/abstracts" as abstracts;

.type-container {
  list-style: none;

  width: 75%;
  margin: 0 auto;
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  font-size: 5rem;

  .type {
    // margin-bottom: 3rem;
    width: 100%;
    height: 100%;

    a {
      width: inherit;
      height: inherit;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &:link,
      &:visited {
        text-decoration: none;
        color: abstracts.$colour-primary;
      }

      &:hover,
      &:active {
        font-weight: bolder;
        background-color: abstracts.$colour-primary;
        color: abstracts.$colour-blanc;

        img {
          filter: invert(100%) sepia(9%) saturate(0%) hue-rotate(80deg) brightness(107%) contrast(107%);
        }
      }

      img {
        width: 15rem;
        height: 15rem;
        filter: invert(23%) sepia(80%) saturate(2901%) hue-rotate(355deg) brightness(101%) contrast(81%);
        transform: rotateY(180deg); //NOTE: pour faire tourner la direction des logos, c'est tant mieux
      }

      h4 {
        font-size: 2.5rem;
      }
    }

    &:nth-child(2) {
      position: relative;
      top: 15rem;
    }

    &:nth-child(5) {
      grid-column: 3 / -1;
    }
  }
}
</style>