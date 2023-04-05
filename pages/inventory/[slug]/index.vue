<script setup>
const route = useRoute();
const slug = route.params.slug;
const query = groq`*[_type=="car" && slug.current=="${slug}"]`;
const { data, error } = await useSanityQuery(query);
console.log(data.value);

</script>
<template>
  <div>

  </div>
</template>


<style lang="scss" scoped></style>