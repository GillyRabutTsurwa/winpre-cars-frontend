<script setup>
const photoIndex = ref(0);

const query = groq`*[_type=="bannerImages"]`;
const { data, error } = await useSanityQuery(query);
const images = data.value[0].images;
console.log(images);

setInterval(() => {
  photoIndex.value++;
  if (photoIndex.value >= images.length) photoIndex.value = 0;
}, 4500)
</script>

<template>
  <figure>
    <SanityImage v-for="(currentImage, index) in images" :asset-id="currentImage.asset._ref"
      :class="{ opaque: index === photoIndex }" />
  </figure>
</template>


<style lang="scss" scoped>
// NOTE: les image prets a utiliser: 2, 3, 5, 8, 9
figure {
  position: relative;
  width: 100%;
  height: calc(100vh - 15rem);

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    -o-object-fit: cover;

    opacity: 0;
    transition: opacity 1s ease-in-out;

    &.opaque {
      opacity: 1;
    }
  }
}
</style>