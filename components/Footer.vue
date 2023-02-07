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
        <a href="https://www.google.com/maps/dir//Win+Pre-Owned+Cars+Inc.,+1001+S+Kent+St,+Winchester,+VA+22601/@39.1751368,-78.1681957,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x89b5ff1f8e2a0cc7:0xf33004bb7d1714a7!2m2!1d-78.166007!2d39.1751327!3e0">
          <p>Win Pre-Owned Cars Inc.</p>
          <p>1001 S Kent St</p>
          <p>Winchester, VA 22601</p>
        </a>
      </address>
    </article>
    <ul class="links-footer__contact">
      <h4 class="links-footer__subtitle">Contact Us</h4>
      <li class="links-footer--item phone">
        <a href="tel:+5407731773">
          <img src="~/assets/svg/phone.svg" alt="">
          <span>540-773-1773</span>
        </a>
      </li>
      <li class="links-footer--item email">
        <a href="mailto:winprecars@yahoo.com">
          <img src="~/assets/svg/mail.svg" alt="">
          <span>winprecars@yahoo.com</span>
        </a>
      </li>

    </ul>
    <ul class="links-footer__follow">
      <h4 class="links-footer__subtitle">Links</h4>
      <li class="links-footer--item">
        <NuxtLink to="/inventory">Inventory</NuxtLink>
      </li>
      <li class="links-footer--item">
        <NuxtLink to="/about">About Us</NuxtLink>
      </li>
      <li class="links-footer--item">
        <NuxtLink to="/contact">Contact</NuxtLink>
      </li>
    </ul>
    <ul class="links-footer__store-hours">
      <h4 class="links-footer__subtitle">Store Hours</h4>
      <li class="links-footer--item store-hours">
        <span class="day">Mon</span>
        <span class="times">Closed</span>
      </li>
      <li class="links-footer--item store-hours">
        <span class="day">Tue</span>
        <span class="times">Closed</span>
      </li>
      <li class="links-footer--item store-hours">
        <span class="day">Wed</span>
        <span class="times">Closed</span>
      </li>
      <li class="links-footer--item store-hours">
        <span class="day">Thu</span>
        <span class="times">10:00 A.M. - 5 P.M.</span>
      </li>
      <li class="links-footer--item store-hours">
        <span class="day">Fri</span>
        <span class="times">10:00 A.M. - 5 P.M.</span>
      </li>
      <li class="links-footer--item store-hours">
        <span class="day">Sat</span>
        <span class="times">10:00 A.M. - 5 P.M.</span>
      </li>
      <li class="links-footer--item store-hours">
        <span class="day">Sun</span>
        <span class="times">Closed</span>
      </li>
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
  position: relative;
  width: 100%;
  // height: 60rem;
  height: 65rem;
  // padding: 0 4rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr) 10rem;
  place-items: center;
  // align-content: center;
  row-gap: 2.5rem;

  .logo {
    // width: 15rem;
    width: 20rem;
    height: 20rem;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    justify-self: end; // mais il (le logo) est toujours hors de centre
    position: relative; //NOTE: voici la solution
    left: 20%;

    background-color: transparent;

    img {
      height: 100%;
    }
  }
  .links-footer {
    &__subtitle {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    &__address,
    &__contact,
    &__follow,
    &__store-hours {
      grid-row: 2 / 3;
      text-align: center;
      // align-self: center;

      a {
        &,
        &:link,
        &:visited {
          color: unset;
          text-decoration: none;
          transition: all 0.2s;
          display: inline-block; //NOTE: sans celui-ci, la rotation n'est pas possible
        }

        &:hover,
        &:active {
          color: $colour-primary;
          -webkit-box-shadow: 0 1rem 2rem rgb(0 0 0 / 40%);
          box-shadow: 0 1rem 2rem rgb(0 0 0 / 40%);
          -webkit-transform: rotate(5deg);
          transform: rotate(5deg);
        }
      }
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

    &__store-hours {
      grid-column: 4 / 5;
      list-style: none;
      // display: grid;
      // grid-template-columns: repeat(2, max-content);
    }

    &--item:not(.store-hours) {
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

    &--item {
      &.store-hours {
        display: flex;
        margin-bottom: 0.35rem;
        .day {
          margin-right: 5rem;
          width: 2.5rem;
        }
        .times {
          // width: 100%;
          align-self: flex-start;
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
  position: absolute; // parent is .footer
  bottom: 0;
  grid-column: 1 / -1;
  grid-row: 4 / 5;
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