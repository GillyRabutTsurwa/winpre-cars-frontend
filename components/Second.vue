<template>
  <section class="about">
    <h2 class="about__title">About <span class="about__title--coloured"> WinPre Cars</span></h2>
    <div class="photo-ou-video">
      <img src="~/assets/img/banner-7.jpg" alt="">
    </div>

    <div v-for="(currentParagraph, index) in state.paragraphs" :key="index" class="text" :class="`text-${index}`">
      <span>{{ currentParagraph.description }}</span>
      <!-- NOTE: this conditional is to show one button in the last element section, even though two are rendered by default due to the code -->
      <a v-if="index === 1" href="mailto:winprecars@yahoo.com?subject=Scheduling%20a%20Test%20Drive"
        class="btn-primary btn" :data-index="index">Schedule a Test Drive</a>
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

const query = groq`*[_type == "introText"]`;
console.log(await useSanityQuery(query));

const { data, error } = await useSanityQuery(query);
if (error.value) throw new Error(`Error: ${error.value}`);
console.log(data.value); //NOTE: pour une raison les valeurs s'affichent inverser. pour le moment je vais faire ceci
state.paragraphs = data.value.reverse(); //NOTE: reversing the array so that the texts come in the order I want, till i find out what's happening
</script>

<style lang="scss" scoped>
@use "@/assets/sass/abstracts" as abstracts;

.about {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: min-content repeat(2, 60rem);

  @include abstracts.breakpoint(480) {
    grid-template-columns: 1fr;
    row-gap: 4rem;
    text-align: center;
  }

  &__title {
    grid-column: 1 / -1;
    text-align: center;
    font-size: 3.5rem;
    text-transform: uppercase;
    margin: 4rem 0;

    &--coloured {
      color: abstracts.$colour-primary;
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

.btn:last-of-type {
  margin-top: 5rem;
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
    background-color: abstracts.$colour-primary;
  }
}
</style>