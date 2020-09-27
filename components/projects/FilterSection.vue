<template>
  <div class="filterItemCore">
    <div class="optionItem">
      <img
        src="../../assets/images/icn_placeholder_filter.svg"
        alt="Icon Research"
      />
      <h1>{{ filterItemTitle }}</h1>
      <div class="itemNumber">{{ totalItemNumber }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterSection",
  props: {
    filterItemTitle: {
      type: String,
      default: "Water"
    },
    totalItemNumber: {
      type: Number,
      default: 3
    }
  }
};
</script>

<style lang="scss" scoped>
.optionItem {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.itemNumber {
  font: {
    family: "McQueenText";
    size: $--font--size--XS;
    variation-settings: "wght" 400;
  }

  color: #000;
  padding: 6px 9px;
  border: 1px solid #000;
  border-radius: 20px;
  opacity: 0.3;
}

img {
  margin-right: 6px;
}

h1 {
  font: {
    family: "McQueenText";
    size: $--font--size--M;
    variation-settings: "wght" 600;
  }
  color: #000;
  margin-right: 10px;
}
</style>
