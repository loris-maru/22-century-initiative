<template>
  <div class="numbersCore">
    <h1>{{ title }}</h1>
    <p>{{ introduction }}</p>
    
    <div class="dataBlock">
      <!-- COLUMN 01-01-01-01 -->
      <ul>
        <div class="divider"></div>
        <li v-for="(item, itemKey) in items" :key="itemKey">
          <img src="~@/assets/images/icn_pin.svg" alt="Image of a pin" />
          {{ item.name }}
          <div class="divider"></div>
        </li>
      </ul>
      
  </div>
</template>

<script>
export default {
  name: "Numbers",
  props: {
    title: {},
  }
};
</script>

<style lang="scss" scoped>
.numbersCore {
  width: 100vw;
  padding: 0 9vw;
  margin: $--spacer--120 0;
}

.dataBlock {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.divider {
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.15);
  margin: 12px 0;
}

img {
  position: relative;
  top: -1px;
  margin-right: 4px;
}

ul {
  flex-basis: 26%;
}

li {
  font: {
    family: "McQueenText";
    size: $--font--size--S;
    variation-settings: "wght" 500;
  }
  color: #000;
}

//------- TITLE STYLE

h1 {
  @include title_one(#000);
}

h2 {
  @include title_two(#000);
  margin-bottom: $--spacer--20;
}

p {
  @include paragraph-level-one;
  margin: $--spacer--60 0;
}
</style>
