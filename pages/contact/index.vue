<template>
  <div class="contact">
    <h2 class="contact__title">Contact Us</h2>
    <menu class="contact__list">
      <li class="contact__list--item">
        <span>Office:</span>
        <span><a href="tel:+5407731773">540-773-1773</a></span>
      </li>
      <li class="contact__list--item">
        <span>Cell (Saber):</span>
        <span><a href="tel:+5405429894">540-542-9894</a></span>
      </li>
      <!-- <li class="contact__list--item"> <span>Cell (Liliya):</span><span>304-657-2180</span></li> -->
      <li class="contact__list--item">
        <span>Cell (Liliya):</span>
        <span><a href="tel:+6124506115">304-657-2180</a></span>
      </li>
      <li class="contact__list--item">
        <span>Email:</span>
        <!-- NOTE: cool things I learnt about mailto links: https://css-tricks.com/snippets/html/mailto-links/ -->
        <span><a href="mailto:winprecars@yahoo.com">winprecars@yahoo.com</a></span>
      </li>
    </menu>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.contact {
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__title {
    margin-bottom: 1.5rem;
    color: $colour-primary;
    text-transform: uppercase;
  }

  &__list {
    list-style: none;
    margin: 0 auto;
    text-align: center;

    &--item {
      font-size: 2rem;

      &:not(:last-child) {
        margin-bottom: 0.5rem;
      }

      span {
        &:first-child {
          font-weight: bolder;
          margin-right: 1rem;
        }

        &:nth-child(2) {
          color: $colour-primary;
        }
      }

      a {
        &,
        &:link,
        &:visited {
          color: currentColor;
          text-decoration: none;
        }
        &:hover,
        &:active {
          color: rgba($colour-primary, 0.8);
        }
      }
    }
  }
}
</style>