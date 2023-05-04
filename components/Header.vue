<template>
  <header class="header">
    <div class="logo">
      <NuxtLink to="/">
        <img src="~/assets/svg/Orange_BlackText_NoNumber.svg" alt="">
      </NuxtLink>
    </div>
    <ul class="links-main">
      <li class="links-main--item">
        <NuxtLink to="/inventory">Inventory</NuxtLink>
      </li>
      <li class="links-main--item">
        <NuxtLink to="/about">About Us</NuxtLink>
      </li>
      <li class="links-main--item">
        <NuxtLink to="/contact">Contact</NuxtLink>
      </li>
      <li class="links-main--item">
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <!-- <DevOnly>
        <li @click="toggleMode" class="links-main--item mode">{{mode}} Mode</li>
      </DevOnly> -->
    </ul>
  </header>
</template>

<script setup>
//  @todo: Study & Implement Dark Mode
//  Do some research on dark mode, particularly with Nuxt, in order to apply it to the website
//  labels: priority low
const emit = defineEmits(["test"]);

const isDark = ref(false);
const mode = computed(() => {
  return isDark.value ? "Dark" : "Light";
});

console.log(mode.value);

const currentMode = computed(() => {
  return mode.value;
});

const toggleMode = () => {
  isDark.value = !isDark.value; //NOTE: this changing will change mode, hence changing currentMode as well

  console.log(currentMode.value);

  // send that togglable value to the parent
  emit("test", currentMode.value);
};
// @todo: Dynamic Sticky Header on Scroll
// Use IntersectionObserver to make the header sticky past the certain point
// As the user continues to scroll down, past the banner, the header should stick to the page
// labels: enhancement
</script>

<style lang="scss" scoped>
@use "@/assets/sass/abstracts" as abstracts;

.header {
  width: 100%;
  height: 9rem;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(to right, abstracts.$background-blanc, abstracts.$colour-primary);

  @include abstracts.breakpoint(480) {
    font-size: 1rem;
    padding: 0;
  }

  .logo {
    width: 11.5rem;
    margin: 0;

    background-color: transparent;

    img {
      height: 100%;
      padding: 2rem 0;
    }
  }

  .links-main {
    display: flex;
    list-style: none;

    &--item {
      margin-right: 5rem;
      font-size: 2rem;

      a {

        &,
        &:link,
        &:visited {
          color: abstracts.$colour-blanc;
          text-transform: uppercase;
          text-decoration: none;
          font-weight: 700;
        }

        &:hover,
        &:active {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>