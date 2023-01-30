<template>
  <div class="contact">
    <h2 class="contact__title">Contact Us</h2>
    <menu class="contact__list">
      <li class="contact__list--item"> <span>Office:</span><span>540-773-1773</span></li>
      <li class="contact__list--item"> <span>Cell (Saber):</span><span>540-542-9894</span> </li>
      <li class="contact__list--item"> <span>Cell (Liliya):</span><span>304-657-2180</span></li>
      <li class="contact__list--item"> <span>Email:</span><span>winprecars@yahoo.com</span></li>
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
    }
  }
}
</style>