<template>
  <div class="car">
    <div class="image-container">
      <div class="main-image">
        <SanityImage :asset-id="imgTest[2]" auto="format" />
      </div>
      <div class="images">
        <SanityImage :asset-id="imgTest[1]" auto="format" />
        <SanityImage :asset-id="imgTest[0]" auto="format" />
      </div>
    </div>
    <div class="car-logo">
      <img src="~/assets/svg/mitsubishi.svg" alt="" srcset="">
    </div>
    <div class="car-info">
      <h2>About Car</h2>
      <div class="car-info-table">
        <div class="list-first">
          <ul>
            <li>Name: {{ state.car.brand }} {{ state.car.model }}</li>
            <li>Year: {{ state.car.year }}</li>
            <li>Price: {{ state.car.price }}</li>
          </ul>
        </div>
        <div class="list-second">
          <ul>
            <li>VIN: {{ state.car.vin }}</li>
            <li>Mileage: {{ state.car.mileage }} </li>
            <li>MPG: {{ state.car.mpg }}</li>
            <li>Engine: {{ state.car.defaultCarData.engine }}</li>
            <li>Drivetrain: {{ state.car.defaultCarData.drivetrain }}</li>
            <li>Exterior Colour: {{ state.car.defaultCarData.exteriorColor }}</li>
            <li>Interior Colour: {{ state.car.defaultCarData.interiorColor }}</li>
          </ul>
        </div>
      </div>

    </div>
    <div class="car-interested">
      <h2 class="car-interested__title">Interested in the car?</h2>
      <p class="car-interested__text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae sint rem earum, cum reprehenderit sequi ea perferendis exercitationem voluptate vel incidunt sunt odio dolorem nostrum doloribus blanditiis facere aliquid ipsa quas reiciendis error! Perferendis quia ipsum, fuga harum, in ratione, sint expedita consectetur minima ex aut illum obcaecati delectus. Id repudiandae fugit recusandae perspiciatis commodi veritatis, laboriosam beatae fuga. Quidem voluptates modi temporibus illo quae consectetur ipsa nesciunt minus et ad eaque deleniti quas recusandae, rerum commodi illum placeat expedita iste! Laudantium corrupti soluta reiciendis saepe, beatae quis maxime rem tempore culpa odio magnam a, voluptatibus pariatur doloremque hic nihil aliquid! A magni, eaque debitis, vero velit officiis illum explicabo, mollitia corporis tempore saepe labore iure aliquid nemo distinctio fugiat!
      </p>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const url = route.params.slug;
console.log(url);
console.log(typeof url);

const state = reactive({
  car: {},
});

let imgTest;

/**
 * NOTE: this works. for dynamic variables.
 * it seems using the the template literal syntaxe wrapped in quotes does the job: "${variableName}"
 * IMPORTANT: doing it without the quotes did not work: ${variableName}
 *
 * furthermore, a good resource that helped me on writing the appropriate GROQ query can be found in this link:
 * https://www.sanity.io/docs/slug-type
 */

//NOTE: getting problems with the async iife on this page
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
</script>

<style lang="scss" scoped>
.car {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 5rem;
  padding: 8rem 3rem;
  justify-items: center;
}

.car-logo {
  width: 40rem;
  height: 40rem;

  img {
    width: 100%;
    height: 100%;
  }
}
.image-container {
  max-width: 76rem;
  // border: 2px solid $colour-primary;
  background-color: #fff;
  // grid-row: 1 / span 2; NOTE; pourrait être utile plus tard
}

.images {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.5rem;
}

.main-image img,
.images img {
  width: 100%;
}

.car-interested {
  grid-column: 2 / 3;

  &__title {
    text-align: center;
    margin-bottom: 2rem;
  }

  &__text {
    line-height: 1.5;
    font-size: 2rem;
  }
}
</style>