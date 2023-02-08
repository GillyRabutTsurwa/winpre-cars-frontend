<template>
  <figure :style="{backgroundImage: `url(${$urlFor(currentImage)})`}"></figure>
</template>

<script setup>
// <figure :style="{backgroundImage: `url(${$urlFor(randomImage)})`}"></figure>
const currentIndex = ref(0);

const query = `*[_type=="bannerImages"]`;
const { data, error } = await useSanityQuery(query);
const images = data.value[0].images;

const nextImage = () => {
  currentIndex.value += 1;
  if (currentIndex.value >= images.length) currentIndex.value = 0;
};

const currentImage = computed(() => {
  return images[currentIndex.value];
});

//

const startImageSlideShow = () => {
  setInterval(nextImage, 5000);
};

onMounted(() => {
  startImageSlideShow();
});
</script>

<style lang="scss" scoped>
// NOTE: les image prets a utiliser: 2, 3, 5, 8, 9
figure {
  width: 100%;
  height: calc(100vh - 15rem);
  // background-image: url(../assets/img/banner-8.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: -15rem;
  background-attachment: fixed;
  opacity: 1;

  // animation-name: fade;
  // animation-timing-function: ease-in;
  // animation-iteration-count: infinite;
  // animation-duration: 7s;
  // // animation-delay: 4s;
  // animation-direction: alternate;
  -webkit-transition: background-image 1.5s linear;
  -moz-transition: background-image 1.5s linear;
  -o-transition: background-image 1.5s linear;
  -ms-transition: background-image 1.5s linear;
  transition: background-image 1.5s linear;
}

@-webkit-keyframes fade {
  0% {
    opacity: 0;
  }
  45% {
    opacity: 0;
  }
  55% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

/* Standard syntax */
@keyframes fade {
  0% {
    opacity: 0;
  }
  45% {
    opacity: 0;
  }
  55% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
</style>