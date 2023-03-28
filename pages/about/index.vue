<template>
  <div class="about">
    <div class="about__list">
      <h3 class="about__title">Who We Are</h3>
      <div class="story u-margin-bottom-large">
        <figure class="story__shape story__shape--1">
          <figcaption class="story__caption">Mary Ambrose</figcaption>
        </figure>
        <div class="story__text">
          <h3 class="heading__tertiary">Best week ever with the famo</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatibus, quia,
            labore illum cupiditate sint, veniam doloremque reprehenderit mollitia commodi quis
            provident ex est molestiae.
          </p>
        </div>
      </div>

      <h3 class="about__point-to-map">Where We Are &rarr;</h3>
      <div class="story u-margin-bottom-large">
        <figure class="story__shape story__shape--1">
          <figcaption class="story__caption">Mary Ambrose</figcaption>
        </figure>

        <div class="story__text">
          <h3 class="heading__tertiary">Best week ever with the famo</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatibus, quia,
            labore illum cupiditate sint, veniam doloremque reprehenderit mollitia commodi quis
            provident ex est molestiae.
          </p>
        </div>
      </div>
    </div>
    <ClientOnly>
      <Map />
    </ClientOnly>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@use "@/assets/sass/abstracts" as abstracts;

.about {
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  &__title {
    text-align: center;
    margin-top: 2rem;
    font-size: 2.5rem;
    color: abstracts.$colour-primary;
    text-transform: uppercase;
  }

  &__point-to-map {
    text-align: right;
    margin-right: 3rem;
    color: abstracts.$colour-primary;
  }
}

.story {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  // width: 75%;
  width: 90rem;
  margin: 4.5rem;
  padding: 6rem;
  -webkit-box-shadow: 0 3rem 6rem rgba(abstracts.$colour-noir, 0.1);
  box-shadow: 0 3rem 6rem rgba(abstracts.$colour-noir, 0.1);
  border-radius: 3px;
  font-size: 1.6rem;
  -webkit-transform: skew(-12deg);
  transform: skew(-12deg);

  &>* {
    -webkit-transform: skew(12deg);
    transform: skew(12deg);
  }

  &:first-of-type {
    margin-bottom: 8rem;
  }

  &__shape {
    position: relative;
    height: 14rem;
    min-width: 14rem;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    -webkit-box-flex: 1;
    -ms-flex: 1 0 20%;
    flex: 1 0 20%;
    margin-right: 2rem;
    -webkit-filter: grayscale(1);
    filter: grayscale(1);
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;

    &--1 {
      background-image: url(~/assets/img/photo-1503376780353-7e6692767b70.avif);
    }

    &--2 {
      background-image: url(~/assets/img/photo-1503376780353-7e6692767b70.avif);
    }
  }

  &__text {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 80%;
    flex: 1 1 80%;
  }

  &__caption {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, 20%);
    transform: translate(-50%, 20%);
    color: abstracts.$colour-blanc;
    text-transform: uppercase;
    font-size: 1.7rem;
    text-align: center;

    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;

    opacity: 0;
  }

  &:hover &__caption {
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    opacity: 1;
  }

  &:hover &__shape {
    -webkit-filter: grayscale(0);
    filter: grayscale(0);
  }
}
</style>