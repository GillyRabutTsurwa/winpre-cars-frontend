<template>
  <div class="car">
    <div class="image-container">
      <div class="main-image">
        <SanityImage :asset-id="imgTest[mainImageIndex]" auto="format" @click="showModal = true" />
      </div>
      <div class="images">
        <SanityImage v-for="(currentImg, index) in imgTest" :key="index" @click="fetchIndex(index)" :asset-id="currentImg"
          auto="format" />
      </div>
    </div>
    <div class="car-info">
      <h2 class="car-info__title">{{ state.car.year }} {{ state.car.brand }} {{ state.car.model }}</h2>
      <div class="car-info__table">
        <ul class="car-info__table--titles">
          <li>Brand</li>
          <li>Model</li>
          <li>Year</li>
          <li>Price</li>
          <li>VIN</li>
          <li>Mileage</li>
          <li>MPG</li>
          <li>Engine</li>
          <li>Drivetrain</li>
          <li>Interior Colour</li>
          <li>Exterior Colour</li>
        </ul>
        <ul class="car-info__table--values">
          <li>{{ state.car.brand }}</li>
          <li>{{ state.car.model }}</li>
          <li>{{ state.car.year }}</li>
          <li>${{ format(state.car.price) }}</li>
          <li>{{ state.car.vin }}</li>
          <li>{{ format(state.car.defaultCarData.mileage) }}</li>
          <li>{{ state.car.defaultCarData.mpg || 7000 }}</li>
          <li>{{ state.car.defaultCarData.engine || 7000 }}</li>
          <li>{{ state.car.defaultCarData.drivetrain || 7000 }}</li>
          <li>{{ state.car.defaultCarData.exteriorColor }}</li>
          <li>{{ state.car.defaultCarData.interiorColor }}</li>
        </ul>
      </div>

    </div>
    <div class="car-interested">
      <h2 class="car-interested__title">Interested in the car?</h2>
      <a :href="`mailto:winprecars@yahoo.com?subject=Requesting%20Info%20on%20${state.car.year} ${state.car.brand} ${state.car.model}`"
        class="btn-primary car-interested__button">Request Info</a>
      <a href="https://www.westlakefinancial.com/" target="_blank"
        class="btn-primary car-interested__button">Financing</a>
    </div>
  </div>
  <Teleport to="body">
    <Modal :show="showModal" :modalImg="imgTest[mainImageIndex]" @close="showModal = false" @previous="showPrevImg"
      @next="showNextImg" />
  </Teleport>
</template>

<script setup>
const route = useRoute();
const url = route.params.slug;

const { format } = useFormatNum();
console.log(useFormatNum());

console.log(format);
const state = reactive({
  car: {},
});

let imgTest;

// NEW:
const showModal = ref(false)


try {
  const query = groq`*[_type=="car" && slug.current == "${url}"]`;
  const { data, error } = await useSanityQuery(query);

  if (error.value) throw new Error(`Error Tings: ${error.value}`);

  console.log(data);
  console.log(data.value);
  state.car = data.value[0]; //NOTE: il y a quand-même un seul objet dans le tableau
  imgTest = state.car.defaultCarData.images.map((currentImg) => currentImg.asset._ref);
  console.log(imgTest);
} catch (error) {
  console.log(error);
}

const mainImageIndex = ref(0);
// NEW: fetch index from image gallery to change main image
const fetchIndex = (imageIndex) => {
  console.log(imageIndex);
  if (!imageIndex) imageIndex = 0;
  mainImageIndex.value = imageIndex;
};

const showPrevImg = () => {
  if (mainImageIndex.value <= 0) mainImageIndex.value = imgTest.length;
  mainImageIndex.value -= 1;
  console.log(mainImageIndex.value);
}

const showNextImg = () => {
  if (mainImageIndex.value >= imgTest.length - 1) mainImageIndex.value = 0;
  mainImageIndex.value += 1;
  console.log(mainImageIndex.value);

}
</script>

<style lang="scss" scoped>
@use "@/assets/sass/abstracts" as abstracts;

.car {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5rem 3rem;
  // row-gap: 5rem;
  padding: 8rem 3rem;
  justify-items: center;

  &-info {
    grid-column: 3 / -1;
    width: 100%;

    &__title {
      font-size: abstracts.$colour-primary;
      text-transform: uppercase;
      text-align: center;
    }

    &__table {
      display: flex;
      // flex-direction: column;
      width: 100%;

      &--titles,
      &--values {
        display: flex;
        flex-direction: column;
        list-style: none;
        width: inherit;
        font-size: 1.8rem;
        color: abstracts.$colour-primary;

        li {
          border-bottom: 0.5px solid abstracts.$colour-primary;
          padding: 2rem 0;
          text-align: center;

          &:hover {
            background-color: abstracts.$colour-primary;
            color: abstracts.$colour-blanc;
          }
        }
      }

      &--titles {

        // text-transform: uppercase;
        // justify-self: center;
        li {
          // text-align: center;
        }
      }

      &--values {}
    }
  }

  &-interested {
    grid-column: 4 / -1;

    &__title {
      text-align: center;
      margin-bottom: 2rem;
    }

    &__button {
      margin-right: 1.5rem;
    }
  }
}

.image-container {
  // max-width: 76rem;
  // border: 2px solid $colour-primary;
  grid-column: 1 / 3;
  background-color: #fff;
  width: 100%;
  // grid-row: 1 / span 2; NOTE; pourrait être utile plus tard
}

.images {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 0.5rem;

  img {
    width: 100%;
    height: 10rem;
    object-fit: cover;
    cursor: pointer;
  }
}

.main-image {
  height: 50rem;
  margin-bottom: 3rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

// using this partout. je vais le gerer plus tard
.btn-primary {

  &,
  &:link,
  &:visited {
    cursor: pointer;
    display: inline-block;
    color: #fff;
    font-size: 1.8rem;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 400;
    border-radius: 2.5rem;
    padding: 1.4rem 2.8rem;
    border: none;
    background-color: abstracts.$colour-primary;
  }
}
</style>