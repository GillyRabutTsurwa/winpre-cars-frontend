<script setup>
const route = useRoute();
console.log(route);
console.log(route.query);

// @todo: Make Helper Function or Composable For Below Function
// this function is better placed someplace else where it is globally accessible. ie, helper or composable
const capitalise = (str) => `${str.charAt(0).toUpperCase()}${str.substring(1)}`;

let queryProperty;
let queryValue;
for (const key in route.query) {
  if (Object.hasOwnProperty.call(route.query, key)) {
    const element = route.query[key];
    console.log(key, element);
    queryProperty = key;
    queryValue = queryProperty === "brand" ? capitalise(element) : element;
    if (queryValue === "Bmw") queryValue = "BMW";
  }
}
console.log(queryProperty, queryValue);

const state = reactive({
  cars: [],
});

const query = Object.keys(route.query).length ? groq`*[_type == "car" && ${queryProperty} == "${queryValue}"]` : groq`*[_type == "car"]`;
console.log(query);

const { data, error } = await useSanityQuery(query);
if (error.value) throw new Error(`Error Tings: ${error.value}`);
state.cars = data;
console.log(state.cars);

const imgURLS = state.cars.map((currentCar) => {
  return currentCar.defaultCarData.images[0];
})

console.log(imgURLS);
const z = imgURLS.map((currentCar) => {
  return currentCar.asset._ref;
})
console.log(z)

</script>
      
<template>
  <menu class="car-list">
    <li v-for="(currentCar, index) in state.cars" :key="currentCar._id" class="car-list__item">
      <div class="car-list__item--image">
        <SanityImage :asset-id="z[index]" />
      </div>
      <h2 class="title">{{ `${currentCar.year} ${currentCar.brand} ${currentCar.model}` }}</h2>
      <div class="car-list__item--data">
        <p class="price">
          <img src="~/assets/svg/money-bag.svg" alt="" class="moneybag-logo">
          <span> &dollar;{{ currentCar.price }}</span>
        </p>
        <p class="mileage">
          <img src="~/assets/svg/speedometre.svg" alt="" class="speedometre-logo">
          <span>{{ currentCar.defaultCarData.mileage }} miles</span>
        </p>
      </div>
      <hr>
      <div class="car-list__item--links">
        <NuxtLink :to="`/inventory/${currentCar.slug.current}`" class="btn-primary">More Info</NuxtLink>
        <a :href="`mailto:winprecars@yahoo.com?subject=Requesting%20Info%20on%20${currentCar.year} ${currentCar.brand} ${currentCar.model}`"
          class="btn-primary">Request Info</a>
      </div>
    </li>
  </menu>
</template>


<style lang="scss" scoped >
@use "@/assets/sass/abstracts" as abstracts;

.car-list {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 37.5rem));
  gap: 4rem;
  padding: 5rem 0 30rem 4rem; //NOTE: for now

  @include abstracts.breakpoint(480) {
    grid-template-rows: 1fr;
  }

  &__item {
    // height: 40rem;
    box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 15%);

    &--image {
      height: 40rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .title {
      text-align: center;
      margin-top: 1.5rem;
    }

    &--data {
      display: flex;
      align-content: center;
      justify-content: center;
      margin-top: 1.75rem;
      margin-bottom: 3rem;

      .mileage,
      .price {
        display: flex;
        align-items: center;

        img {
          margin-right: 1rem;
          height: 2.25rem;
        }

        span {
          font-size: 1.4rem;
        }
      }

      .mileage {
        .speedometre-logo {
          filter: invert(23%) sepia(80%) saturate(2901%) hue-rotate(355deg) brightness(101%) contrast(81%);
        }

        span {
          // font-size: 2.5rem;
        }
      }

      .price {

        // margin-right: 1.5rem;
        // position: relative;
        .moneybag-logo {
          // NOTE; repeated code above. put in mixin or extends later
          filter: invert(23%) sepia(80%) saturate(2901%) hue-rotate(355deg) brightness(101%) contrast(81%);
        }

        span {
          // font-size: 2.5rem;
        }

        &::after {
          content: "\007C";
          // position: absolute;
          margin: 0 1.5rem;
          color: abstracts.$colour-primary;
        }
      }
    }

    hr {
      background-color: abstracts.$colour-primary;
      border-color: abstracts.$colour-primary;
    }

    &--links {
      display: flex;
      justify-content: space-around;
      margin: 3rem 0;
    }
  }
}

//TODO; make mixin or extends this code is being used multiple places
.btn-primary {

  &,
  &:link,
  &:visited {
    cursor: pointer;
    display: inline-block;
    color: abstracts.$colour-blanc;
    font-size: 1.25rem;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 400;
    border-radius: 2.5rem;
    padding: 1.25rem 2rem;
    border: none;
    background-color: abstracts.$colour-primary;
  }
}
</style>