<template>
  <header class="header">
    <div class="logo">
      <NuxtLink to="/">
        <img src="~/assets/svg/Orange_BlackText_NoNumber.svg" alt="">
      </NuxtLink>
    </div>
    <ul class="links-main">
      <li class="links-main--item">
        <NuxtLink to="/cars">Cars</NuxtLink>
      </li>
      <li class="links-main--item">
        <NuxtLink to="/about">About Us</NuxtLink>
      </li>
      <li class="links-main--item">
        <NuxtLink to="/">Contact</NuxtLink>
      </li>
      <!-- <DevOnly>
        <li @click="toggleMode" class="links-main--item mode">{{mode}} Mode</li>
      </DevOnly> -->
    </ul>
  </header>
</template>

<script setup>
// NOTE: no longer active (for the moment)
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
// =======================================
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 9rem;
  padding: 0 2rem;

  // position: fixed; //TODO - le rendre dynamique en utilisant intersecionObserver

  display: flex;
  justify-content: space-between;
  align-items: center;
  // background-image: linear-gradient(to right, gold, $colour-primary); //NOTE: save this to show Saber's mum
  background-image: linear-gradient(to right, $background-blanc, $colour-primary); //NOTE: save this to show Saber's mum

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
          color: $colour-blanc;
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