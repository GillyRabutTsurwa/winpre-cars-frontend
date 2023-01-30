<template>
  <footer class="footer dark">
    <div class="logo">
      <NuxtLink to="/">
        <img src="~/assets/svg/Orange_WhiteText_NoNumber.svg" alt="" />
      </NuxtLink>
    </div>
    <article class="links-footer__address">
      <h4 class="links-footer__subtitle">Location</h4>
      <address>
        <p>Win Pre-Owned Cars Inc.</p>
        <p>1001 S Kent St</p>
        <p>Winchester, VA 22601</p>
      </address>
    </article>
    <ul class="links-footer__contact">
      <h4 class="links-footer__subtitle">Contact Us</h4>
      <li class="links-footer--item phone">
        <img src="~/assets/svg/phone.svg" alt="">
        <span>540-773-1773</span>
      </li>
      <li class="links-footer--item email">
        <img src="~/assets/svg/mail.svg" alt="">
        <span>winprecars@yahoo.com</span>
      </li>

    </ul>
    <ul class="links-footer__follow">
      <h4 class="links-footer__subtitle">Follow Us</h4>
      <li class="links-footer--item">Home</li>
      <li class="links-footer--item">Inventory</li>
      <li class="links-footer--item">About Us</li>
      <li class="links-footer--item">Testimonials</li>
      <li class="links-footer--item">Contact</li>
    </ul>
    <h3 class="copyright">Copyright &copy; Win Pre-Owned Cars Inc. {{currentYear}}. All Rights Reserved</h3>
    <div class="below-footer">
      <p>Powered via <img src="~/assets/svg/nuxt-logo.svg" alt="" class="nuxt"> &
        <img src="~/assets/svg/sanity-logo.svg" alt="" class="sanity" /> &#124; <span class="hosted-on">Hosted on</span> <img src="~/assets/svg/netlify-logo.svg" alt="" class="netlify" />
      </p>
    </div>
  </footer>
</template>
  
<script setup>
/**
 * NOTE: using props keep track of the mode in the footer
 * but more importantly, i'm using it to dynamically change the logo in the footer
 * NOTEIMPORTANT: the code for defining the props has been removed to be used later
 */

//NOTE: for copyright statement
const currentYear = computed(() => {
  return new Date().getFullYear();
});
</script>
  
  <style lang="scss" scoped>
.footer {
  width: 100%;
  // height: 60rem;
  height: 65vh;
  // padding: 0 4rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  // grid-template-rows: repeat(3, 1fr);
  row-gap: 2.5rem;
  // background-color: $background-blanc;

  .logo {
    // width: 15rem;
    width: 20rem;
    height: 20rem;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    justify-self: center;
    background-color: transparent;

    img {
      height: 100%;
    }
  }
  .links-footer {
    display: flex;
    list-style: none;

    &__address,
    &__contact,
    &__follow {
      grid-row: 2 / 3;
      justify-self: center;
    }

    &__address {
      grid-column: 1 / 2;
      text-align: center;
    }

    &__contact {
      grid-column: 2 / 3;
      display: flex;
      flex-direction: column;

      //TODO: adjust css code to be cleaner later
      & > *:not(:last-child) {
        margin-bottom: 1rem;
      }
    }

    &__follow {
      grid-column: 3 / 4;
    }

    &__subtitle {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    &--item {
      margin-right: 1.5rem;
      color: #fff;
      text-decoration: none;
      // text-transform: uppercase;
      display: inline-block;
      // -webkit-transition: all 0.2s;
      // transition: all 0.2s;
      &.phone {
        img {
          height: 1.5rem;
          margin-right: 1rem;
          filter: invert(23%) sepia(80%) saturate(2901%) hue-rotate(355deg) brightness(101%) contrast(81%);
        }
      }
      // NOTE: REPEATED code.
      // TODO: refactor later
      &.email {
        img {
          height: 1.5rem;
          margin-right: 1rem;
          filter: invert(23%) sepia(80%) saturate(2901%) hue-rotate(355deg) brightness(101%) contrast(81%);
        }
      }
    }
  }

  .copyright {
    grid-row: 3 / 4;
    grid-column: 2 / 3; //NOTE: 3 / 4 est aussi bien
    text-align: center;
  }
}

.below-footer {
  grid-column: 1 / -1;
  width: 100%;
  background-color: $colour-noir;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1.5rem 0;

  p {
    margin: 0 auto;
    font-size: 2rem;

    .hosted-on {
      margin-left: 1.5rem;
    }

    img {
      height: 2rem;
      margin: 0 1rem;
    }

    .nuxt {
      height: 3rem;
      // width: 4rem;
      // font-size: 4rem;
      position: relative;
      top: 0.5rem;
    }

    .sanity {
      position: relative;
      top: 0.125rem;
    }

    .netlify {
      position: relative;
      height: 3rem;
      top: 0.5rem;
    }
  }
}
</style>