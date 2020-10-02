<template>
  <div class="categoryCard">
    <nuxt-link class="category-link" :to="`/categories/${slug.current}`">
      {{ name }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "CategoryCard",
  props: {
    name: {
      type: String
    },
    slug: Object
  }
};
</script>

<style lang="scss" scoped>
button {
  background: rgba(0, 0, 0, 0);
  padding: 10px 18px;
  border: 1px solid #a5a5a5;
  border-radius: 4px;
  font: {
    family: "McQueenText";
    size: $--font--size--XS;
    variation-settings: "wght" 300;
  }
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #a5a5a5;
  transition: all ease-in-out 0.5s;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid #000;
    color: #000;
    font-variation-settings: "wght" 600;
  }
}
</style>
