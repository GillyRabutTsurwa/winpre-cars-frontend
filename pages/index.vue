<template>
  <ClientOnly>
    <main>
      <Banner />
      <Second />
      <Third />

      <div v-for="currentCar in state.cars" :key="currentCar._id">
        {{ currentCar.title }}
      </div>

      <NuxtLink v-for="currentCar in state.cars" :key="currentCar._id" :to="`/cars/${currentCar.slug.current}`">
        {{ currentCar.title }}
      </NuxtLink>
    </main>
  </ClientOnly>

</template>

<script setup>
const state = reactive({
  cars: [],
});

(async () => {
  try {
    const query = groq`*[_type == "car"]`;
    const { data, error } = await useSanityQuery(query);
    if (error.value) throw new Error(`Error: ${error.value}`);
    console.log(data);
    state.cars = data.value;
    console.log(state.cars);
    console.log(Array.isArray(state.cars));
  } catch (error) {
    console.log(error);
  }
})();
</script>

<style lang="scss" scoped>
</style>