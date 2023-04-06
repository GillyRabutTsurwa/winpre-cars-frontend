<script setup>
const route = useRoute();
console.log(route);
console.log(route.query);
//capitalise helper function. eventually put in own composable
const capitalise = (str) => `${str.charAt(0).toUpperCase()}${str.substring(1)}`;
let queryProperty;
let queryValue;
for (const key in route.query) {
  if (Object.hasOwnProperty.call(route.query, key)) {
    const element = route.query[key];
    console.log(key, element);
    queryProperty = key;
    queryValue = queryProperty === "brand" ? capitalise(element) : element;

    // @todo - improve this code if it works
    if (queryValue === "Bmw") queryValue = "BMW";
  }
}
console.log(queryProperty, queryValue);
const state = reactive({
  cars: [],
});
/**
 * NOTEIMPORTANT:
 * upon looking at the code that handles the queries, the general query (for all cars) was not working
 * this is because I was looking to see if the route.query object existed...
 * ... but was not checking if there were any properties inside of it
 * thus, this NEW solution checks to see if there are any properties inside the route.query object, ie, if it is an empty object or not
 * if it is empty, it will do a general query for all the cars
 */
const query = Object.keys(route.query).length ? groq`*[_type == "car" && ${queryProperty} == "${queryValue}"]` : groq`*[_type == "car"]`;
console.log(query);

const { data, error } = await useSanityQuery(query);
if (error.value) throw new Error(`Error Tings: ${error.value}`);
console.log(data);
state.cars = data.value;
console.log(state.cars);
</script>
      
<template>
  <menu class="car-list">
    <li v-for="currentCar in state.cars" :key="currentCar._id" class="car-list__item">
      <div class="car-list__item--image">
        <SanityImage :asset-id="currentCar.defaultCarData.images[0].asset._ref" />
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
        <!-- NEWNOTE: using the mailto links truc i just learnt to redirect user to an email with a dynamic subject based on car clicked. very neat -->
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