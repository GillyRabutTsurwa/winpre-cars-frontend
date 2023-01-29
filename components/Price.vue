<template>
  <ul class="price-container">
    <li v-for="(currentPrice, index) in priceRanges" :key="index" class="price">
      <NuxtLink :to="{path: `inventory`, query: {priceLevel: currentPrice.level}}">
        <img :src="types[iconName]" alt="">
        <h4>{{ currentPrice.range }}</h4>
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
import { filename } from "pathe/utils";
const priceRanges = [
  {
    range: "< $4,999",
    level: "first",
  },
  {
    range: "$5000 - $9,999",
    level: "second",
  },
  {
    range: "$10000 - $14,999",
    level: "third",
  },
  {
    range: "$15000 - $19,999",
    level: "fourth",
  },
  {
    range: "$20,000 - $24,999",
    level: "fifth",
  },
  {
    range: "> $25000",
    level: "sixth",
  },
];

const glob = import.meta.glob("~/assets/svg/*.svg", { eager: true });
const types = Object.fromEntries(Object.entries(glob).map(([key, value]) => [filename(key), value.default]));

const iconName = "car-price";
</script>

<style lang="scss" scoped>
.price-container {
  list-style: none;

  width: 75%;
  margin: 0 auto;
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  font-size: 5rem;

  .price {
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
        color: $colour-primary;
      }

      &:hover,
      &:active {
        font-weight: bolder;
        background-color: $colour-primary;
        color: $colour-blanc;

        img {
          filter: invert(100%) sepia(9%) saturate(0%) hue-rotate(80deg) brightness(107%) contrast(107%);
        }
      }

      img {
        width: 15rem;
        height: 15rem;
        filter: invert(23%) sepia(80%) saturate(2901%) hue-rotate(355deg) brightness(101%) contrast(81%);
      }

      h4 {
        font-size: 2.5rem;
      }
    }
  }
}
</style>