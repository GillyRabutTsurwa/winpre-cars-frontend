<template>
  <div class="container" ref="container">
    <Header ref="header" />
    <slot />
    <!-- <Footer /> -->
  </div>
</template>

<script setup>
const container = ref(null);
const header = ref(null);
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

// ================Intersection Observer======================
const createObserver = (observedElement) => {
  // NOTE: observer options
  const options = {
    root: null,
    threshold: 1,
    rootMargin: "0px",
  };
  // NOTE: observer setup
  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((currentEntry) => {
      if (currentEntry.intersectionRatio < 0.25) {
        console.log("trigger sticky now");
      } else {
        console.log("undo sticky");
      }
    });
  }, options);
  observer.observe(observedElement);
};
onMounted(() => {
  console.log(container.value);
  console.log(header.value.$el); //NOTEIMPORTANT: how to access the DOM of a child component within a parent component
  console.dir(header.value.$el.style);

  createObserver(container.value);

  // TESTING: aha i see. so this code works well. puis-je faie le meme avec vue la dessous?
  // document.addEventListener("scroll", () => {
  //   console.log(container.value.getBoundingClientRect().top);
  //   if (container.value.getBoundingClientRect().top < -120) {
  //     header.value.$el.style.position = "sticky";
  //     header.value.$el.style.top = 0;
  //     header.value.$el.style.zIndex = 9999;
  //   } else {
  //     header.value.$el.style.position = "";
  //   }
  // });
});
</script>

<style lang="scss" scoped>
@use "@/assets/sass/abstracts" as abstracts;

.container {
  position: relative;
}

// NOTE: no longer active (for the moment)
.dark {
  background-color: abstracts.$background-sombre;
  color: abstracts.$background-blanc;
}

.light {
  background-color: abstracts.$background-blanc;
  color: abstracts.$background-sombre;
}
</style>