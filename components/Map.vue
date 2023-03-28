<template>
  <div id="mapContainer"></div>
</template>
    
<script setup>
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import imgURL from "~/assets/img/marker-icon.png";

const state = reactive({
  map: null,
});

// TESTING solution for icon not showing in prod
//NOTE: if it works, i got solution here: https://stackoverflow.com/questions/60174040/marker-icon-isnt-showing-in-leaflet
const myIcon = L.icon({
  iconUrl: imgURL,
});

const locationCoordinates = [39.17529070604941, -78.16598554417936]; //NOTE: don't need to be reactive. not changing

onMounted(() => {
  // const coordinates = [latitude, longitude];
  // NOTE: this value was originally in the setView method, but i'm putting it in a variable for more clarity. change it to play around with it
  const zoomLevel = 15;

  // NOTE: it seems this is the entry point of rendering the map
  state.map = L.map("mapContainer").setView(locationCoordinates, zoomLevel); // ("map") signifie un element dans notre HTML ayant le ID de "map"

  /**
   * NOTE:
   * tile layers affecct the appearance of the map
   * apparently there's all sorts and are customisable by simply changing the url (1st parametre of the tileLayer())
   */
  L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(state.map);

  // NOTE: and this displays the map marker
  L.marker(locationCoordinates, { icon: myIcon })
    .addTo(state.map)
    .bindPopup("<span class='orange'>We Are Here.<br> Just Outside Downtown Winchester.</span>")
    .openPopup();
});
</script>
    
<style lang="scss">
#mapContainer {
  /* width: 100%;
  height: 50vh; */
}

.leaflet-popup-content-wrapper,
.leaflet-popup-content {
  background-color: #ddd;
}

.leaflet-popup-tip-container {
  display: none; //NOTE; don't like how it looks on here et j'en ai pas besoin dans ce cas-ci
}

.orange {
  background-color: #ddd;
  font-size: 1rem;
}
</style>