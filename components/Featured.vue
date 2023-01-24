<template>
  <section class="featured">
    <h3>Featured Cars</h3>
    <div class="cards">
      <Card v-for="(_, index) in 3" :key="index" />
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.cards {
  display: flex;
  background-color: unset;
}
.card {
  /* * NOTEIMPORTANT: perspective is the secret ingredient for that 3D vibe */
  -webkit-perspective: 170rem;
  perspective: 170rem;
  height: 50rem;
  width: 40rem;
  position: relative;
  margin: 5% auto;
}

.card__front,
.card__back {
  /* In relation to the parent */
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  /* ======================== */
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  /* The Transition */
  -webkit-transition: all 1.2s ease;
  transition: all 1.2s ease;
  /* ============== */
  /* Other Styling */
  -webkit-box-shadow: 0px 5px 5px #000;
  box-shadow: 0px 5px 5px #777;
  /* ============= */
}

.card__front {
  background-color: #fff;
}

.card__back {
  background-image: -webkit-gradient(linear, left top, right bottom, from(rgb(130, 240, 139)), to(rgb(29, 210, 223)));
  background-image: linear-gradient(to right bottom, rgb(130, 240, 139), rgb(29, 210, 223));
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.card:hover .card__front {
  -webkit-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
}

.card:hover .card__back {
  -webkit-transform: rotateY(0);
  transform: rotateY(0);
}

/* ================================= */

.card__front--image {
  width: 100%;
  height: 90%;
  /* background-image: url(./Wun\ Two\ -\ Seasons\ \(2016\).jpg); */
  background-image: url(../assets/img/photo-1503376780353-7e6692767b70.avif);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.card__front--title {
  height: 10%;
  text-align: center;
  padding-top: 1.5rem;
  font-size: 2rem;
}
</style>