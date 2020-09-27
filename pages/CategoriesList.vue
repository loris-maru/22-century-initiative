<template>
  <div class="projectListCore">
    <CategoryItem class="singleItem" />
    <CategoryItem class="singleItem" />
    <CategoryItem class="singleItem" />
    <CategoryItem class="singleItem" />
    <CategoryItem class="singleItem" />
    <CategoryItem class="singleItem" />
    <CategoryItem class="singleItem" />
  </div>
</template>

<script>
// Components
import CategoryItem from "@/components/categories/CategoryItem";

export default {
  layout: "SubPage",
  name: "CategoriesList",
  components: {
    CategoryItem
  }
};
</script>

<style lang="scss" scoped>
.projectListCore {
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  padding-top: 6.25vw;
}

.singleItem {
  margin-right: 20px;
  margin-bottom: 20px;
  cursor: pointer;
}
</style>
