<script setup>
const query = groq`*[_type=="bannerImages"]`;
const { data, error } = await useSanityQuery(query);

const images = data.value[0].images;
console.log(images);

// images.forEach((currentImg) => {
//   console.log(currentImg.asset._ref)
// })
const photoIndex = ref(0);

onMounted(() => {
  setInterval(() => {
    photoIndex.value++;
    if (photoIndex.value >= images.length) photoIndex.value = 0;
  }, 15000);
});

</script>

<template>
  <figure>
    <!-- <img v-for="(currentImg, index) in images" :src="currentImg.asset._ref" :class="{ opaque: index === photoIndex }"
                alt="car banner img" /> -->
    <SanityImage v-for="(currentImg, index) in images" :asset-id="currentImg.asset._ref"
      :class="{ opaque: index === photoIndex }" />
  </figure>
</template>


<style lang="scss" scoped>
figure {
  position: relative;
  width: 100%;
  height: calc(100vh - 15rem);

  & img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover; // makes it look nicer
    opacity: 0;
    transition: opacity 1s ease-in-out;

    &.opaque {
      opacity: 1;
    }
  }
}
</style>