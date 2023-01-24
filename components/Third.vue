<template>
  <section class="shop">
    <h3 class="shop__subtitle">Shop By <span class="shop__subtitle--category">{{ currentTab }}</span></h3>
    <div class="shop__buttons">
      <button v-for="(_, tabProperty) in tabs" :key="tabProperty" @click="currentTab = tabProperty" class="btn-primary">
        {{ tabProperty }}
      </button>
    </div>
    <component :is="tabs[currentTab]"></component>
  </section>
</template>

<script setup>
/**
 * NOTEIMPORTANT: dynamic components in Nuxt 3
 * https://nuxt.com/docs/guide/directory-structure/components#dynamic-components
 *
 */
const currentTab = ref("Brand");
const tabs = {
  Brand: resolveComponent("Brand"),
  Price: resolveComponent("Price"),
  Type: resolveComponent("Type"),
};
</script>

<style lang="scss" scoped>
.shop {
  height: 95vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, min-content) 1fr;
  gap: 4rem;

  padding: 6rem;

  &__subtitle {
    grid-column: 1 / -1;
    text-align: center;
    font-size: 3.5rem;
    text-transform: uppercase;

    &--category {
      color: $colour-primary;
    }
  }

  &__buttons {
    grid-column: 1 / -1;
    grid-row: 2 / 3;
    justify-self: center;
    text-transform: uppercase;

    display: flex;
    align-items: flex-start;

    & > * {
      margin-right: 3rem;
    }
  }
}

//NOTE: je vais deplacer ce code, car ce sera global. code aussi trouver chez Second.vue
.btn-primary {
  &,
  &:link,
  &:visited {
    cursor: pointer;
    display: inline-block;
    color: $colour-blanc;
    font-size: 1.8rem;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 400;
    border-radius: 2.5rem;
    padding: 1.4rem 2.8rem;
    border: none;
    background-color: $colour-primary;
  }
}
</style>