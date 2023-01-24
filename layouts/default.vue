<template>
  <div class="container">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
//NOTE: no longer active (for the moment)
const currentMode = ref("Light");

const logMode = (payload) => {
  console.log(payload);
  // currentMode.value = payload ? "Light" : "Dark";
  currentMode.value = payload;
};

const headerFooterClasses = computed(() => {
  return {
    dark: currentMode.value === "Dark",
    light: currentMode.value === "Light",
  };
});
// ======================================
</script>

<style lang="scss" scoped>
.container {
  position: relative;
}

// NOTE: no longer active (for the moment)
.dark {
  background-color: $background-sombre;
  color: $background-blanc;
}

.light {
  background-color: $background-blanc;
  color: $background-sombre;
}
</style>