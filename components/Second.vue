<template>
  <section class="about">
    <h2 class="about__title">About <span class="about__title--coloured"> WinPre Cars</span></h2>
    <div class="photo-ou-video">
      <img src="~/assets/img/banner-7.jpg" alt="">
    </div>

    <div v-for="(currentParagraph, index) in state.paragraphs" :key="index" class="text">
      <span>{{ currentParagraph.description }}</span>
      <button class="btn-primary">Test</button>
    </div>

    <div class="photo-ou-video">
      <img src="~/assets/img/banner-1.jpg" alt="">
    </div>
  </section>
</template>

<script setup>
const state = reactive({
  paragraphs: [],
});

(async () => {
  try {
    const query = groq`*[_type == "introText"]`;
    console.log(await useSanityQuery(query));

    const { data, error } = await useSanityQuery(query);
    if (error.value) throw new Error(`Error: ${error.value}`);
    console.log(data.value); //NOTE: pour une raison les valeurs s'affichent inverser. pour le moment je vais faire ceci
    state.paragraphs = data.value.reverse(); //NOTE: reversing the array so that the texts come in the order I want, till i find out what's happening
  } catch (error) {
    console.log(error);
  }
})();
</script>

<style lang="scss" scoped>
.about {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: min-content repeat(2, 60rem);

  &__title {
    grid-column: 1 / -1;
    text-align: center;
    font-size: 3.5rem;
    text-transform: uppercase;
    margin: 4rem 0;

    &--coloured {
      color: $colour-primary;
    }
  }

  .text {
    font-size: 3rem;
    padding: 0.75rem 3rem;
    line-height: 2;

    display: flex;
    flex-direction: column; //NOTE: car j'ajoute une bouton
    justify-content: center;
    align-items: center;
  }

  .photo-ou-video {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

//NOTE: je vais deplacer ce code, car ce sera global
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
    background-color: $colour-primary;
  }
}
</style>