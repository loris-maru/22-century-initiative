<template>
  <div class="numbersCore">
    <h1>{{ masterTitle }}</h1>
    <p>{{ introduction }}</p>
    <h2>{{ dataTitle }}</h2>

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
      <!-- COLUMN 02-02-02-02 -->
      <ul>
        <div class="divider"></div>
        <li v-for="(item, itemKey) in items" :key="itemKey">
          <img src="~@/assets/images/icn_pin.svg" alt="Image of a pin" />
          {{ item.name }}
          <div class="divider"></div>
        </li>
      </ul>
      <!-- COLUMN 03-03-03-03 -->
      <ul>
        <div class="divider"></div>
        <li v-for="(item, itemKey) in items" :key="itemKey">
          <img src="~@/assets/images/icn_pin.svg" alt="Image of a pin" />
          {{ item.name }}
          <div class="divider"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Numbers",
  data() {
    return {
      items: [
        { name: "Impact" },
        { name: "Budget" },
        { name: "Workers" },
        { name: "Internal projects" },
        { name: "Salary" }
      ]
    };
  },
  props: {
    masterTitle: {
      type: String,
      default: "Nulla vitae elit libero"
    },
    introduction: {
      type: String,
      default:
        "Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum. "
    },
    dataTitle: {
      type: String,
      default: "Technical Informations"
    },
    dataName: {
      type: String,
      default: "Impact"
    }
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
