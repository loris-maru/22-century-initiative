<template>
  <div class="categoryItemCore">
    <div class="titleCategory">
      <h1>{{ categoryName }}</h1>
    </div>
    <div class="projectNumber">
      <img
        src="../../assets/images/icn_project.svg"
        alt="Icon project document"
      />
      {{ projectNumber }} projects
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryItem",
  props: {
    categoryName: {
      type: String,
      default: "Recycling"
    },
    projectNumber: {
      type: Number,
      default: 8
    }
  }
};
</script>

<style lang="scss" scoped>
.categoryItemCore {
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  border: solid 2px #000;
  padding: 12px 16px;
  border-radius: 4px;
  transition: all ease-in-out 0.5s;
  background: rgba(255, 255, 255, 0);

  &:hover {
    background: rgba(255, 255, 255, 0.5);
    padding: 12px 24px;
  }
}

h1 {
  font: {
    family: "McQueenDisplay";
    size: $--font--size--XXL;
    weight: 800;
  }
  color: #000;
  margin-right: 40px;
}

.projectNumber {
  display: flex;
  align-items: center;
  height: 12px;
  flex-direction: row;
  font: {
    family: "McQueenText";
    size: $--font--size--XS;
    variation-settings: "wght" 500;
  }
  color: #000;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

img {
  margin-right: 8px;
}
</style>
